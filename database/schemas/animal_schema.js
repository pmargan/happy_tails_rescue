const AnimalSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  animal_photo: {
    type: String,
    required: true
  },
  animal_type: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  microchip: {
    type: String,
    required: true,
    minLength: 9,
    maxLength: 15
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  primary_breed: {
    type: String,
    required: true
  },
  secondary_breed: {
    type: String,
    required: false
  },
  cross_breed: {
    type: Boolean,
    required: false
  },
  color: {
    type: String,
    required: true
  },
  coat_type: {
    type: String,
    required: false
  },
  size: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  friendly_with: {
    type: Text,
    required: true
  },
  would_suit: {
    type: Text,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  behaviorNotes: {
    type: Text,
    required: true
  },
  medicalNotes: {
    type: Text,
    required: true
  },
  house_trained: {
    type: Boolean,
    required: true
  },
  adoptionFee: {
    type: Integer,
    required: true
  },
  bin: {
    type: String,
    required: true
  },
  desexed: {
    type: Boolean,
    required: true
  },
  vaccinated: {
    type: Boolean,
    required: true
  },
  wormed: {
    type: Boolean,
    required: true
  },
  heartwormTreated: {
    type: Boolean,
    required: true
  },
  description: {
    type: Text,
    required: true
  },
  dob: {
    type: Date,
    required: false
  },
  extra_notes: {
    type: Text,
    required: false
  }
})

module.exports(AnimalSchema)
