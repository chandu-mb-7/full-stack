import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  ownerId: {
    type: String, 
    required: true,
  },
  city: String,
  locality: String,
  landmark: String,
  propertyType: String,
  adType: String,
  rent: Number,
  deposit: Number,
  amenities: [String],
  availability: String,
  startTime: String,
  endTime: String,
  isAllDay: Boolean,
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
