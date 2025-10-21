import Property from "../models/Property.js";

// ✅ Create new property
export const createProperty = async (req, res) => {
  try {
    // ✅ Use phone number from token (since OTP login)
    const ownerId = req.user?.phone;

    if (!ownerId) {
      return res.status(400).json({
        success: false,
        message: "Missing ownerId (phone) from token",
      });
    }

    const {
      city,
      locality,
      landmark,
      propertyType,
      adType,
      rent,
      deposit,
      amenities,
      availability,
      startTime,
      endTime,
      isAllDay,
    } = req.body;

    const newProperty = new Property({
      ownerId,
      city,
      locality,
      landmark,
      propertyType,
      adType,
      rent,
      deposit,
      amenities,
      availability,
      startTime,
      endTime,
      isAllDay,
    });

    await newProperty.save();

    res.status(201).json({
      success: true,
      message: "Property posted successfully",
      propertyId: newProperty._id,
    });
  } catch (error) {
    console.error("❌ Error creating property:", error);
    res.status(500).json({
      success: false,
      message: "Failed to post property",
      error: error.message,
    });
  }
};

// ✅ Get all properties
// ✅ Get all properties for a specific owner
export const getAllProperties = async (req, res) => {
  try {
    const { ownerId } = req.query;

    // Ensure ownerId is passed
    if (!ownerId) {
      return res.status(400).json({
        success: false,
        message: "ownerId (phone) is required to fetch properties",
      });
    }

    // Normalize to always start with +91
    const normalizedOwnerId = ownerId.startsWith("+91")
      ? ownerId
      : `+91${ownerId}`;

    const properties = await Property.find({ ownerId: normalizedOwnerId });

    return res.status(200).json({
      success: true,
      count: properties.length,
      properties,
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch properties",
      error: error.message,
    });
  }
};

// ✅ Get property by ID
export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }
    res.json({ success: true, property });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching property",
      error: error.message,
    });
  }
};
// ✅ Delete property
export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findByIdAndDelete(id);
    if (!property) {
      return res.status(404).json({ success: false, message: "Property not found" });
    }
    res.json({ success: true, message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete property", error: error.message });
  }
};

// ✅ Update property
export const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Property.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Property not found" });
    }
    res.json({ success: true, message: "Property updated successfully", property: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update property", error: error.message });
  }
};
