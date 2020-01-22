const animalSchema = [
    {
    user_id: "",
    animal_photo: "http://lorempixel.com/200/200",
    animal_type: "Dog",
    microchip: "abc123456789",
    name: "Budweiser",
    age: 1.5,
    gender: "Male",
    primary_breed: "Corgi",
    secondary_breed: "",
    cross_breed: true,
    color: "Brown",
    coat_type: "Short",
    size: "Medium",
    location: "Tarampa, West Brisbane",
    friendly_with: "Dogs (MUST be a calm well balanced dog) and cats (can sometimes get over excited and chase). Kids not recommended.",
    would_suit: "Couple, singles, retirees, families",
    weight: 8,
    behavior_notes: "Needs a confident dog owner as he can be snappy",
    medical_notes: "",
    house_trained: true,
    adoption_fee: 450,
    bin: "BIN0000561500753",
    desexed: true,
    vaccinated: true,
    wormed: true,
    heartworm_treated: true,
    dob: 21/01/2019,
    extra_notes: "",
    description: "Budweiser, or Buddy as he is known always greets you with great excitement when you get home"
    },

    {
    user_id: "",
    animal_photo: "http://lorempixel.com/200/200",
    animal_type: "Cat",
    microchip: "abc987654321",
    name: "Abbey",
    age: 9,
    gender: "Female",
    primary_breed: "Bengal",
    secondary_breed: "",
    cross_breed: false,
    color: "Brown spotted",
    coat_type: "Short",
    size: "Small",
    location: "Wakerley, Brisbane",
    friendly_with: "None, must be only cat",
    would_suit: "Couple, singles, retirees, families",
    weight: 4,
    behavior_notes: "Needs an experienced owner",
    medical_notes: "Sensitive skin",
    house_trained: true,
    adoption_fee: 250,
    bin: "BIN0000561500753",
    desexed: true,
    vaccinated: true,
    wormed: true,
    heartworm_treated: true,
    dob: 21/01/2010,
    extra_notes: "",
    description: "Brown spotted Bangel cat"
    }
]

AnimalModel.createOne({...AnimalSchema})

// animalData.forEach(doc => {
//     model.createOne(doc)
// })

const dynamicText = {
    welcomePage: `Welcome to Happy Tails Animal Rescue Inc.
 
    We are a not-for-profit, no-kill animal rescue charity based in South-East QLD; however, dedicated to helping animals in need Australia-wide! Happy Tails is committed to taking in dogs, cats, kittens and puppies that find themselves in need; and doing all we can to re-write their tale into one with a happily ever after.
     
    We place all our animals in loving, approved foster homes where they will get the best care while they wait for their forever homes. We provide all vet and behavioural work required to ensure our animals are happy, healthy and ready to be a part of a family!
     
    Happy Tails has a thorough adoption process including applications, meet and greets and home checks in some cases; to ensure our animals are going to the right home. We are committed to our animals; and if for any reason an adopted animal can no longer be cared for, we will take them back into foster care and provide for them until they find their true forever home.
     
    Every member of Happy Tails staff is an animal lover who has dedicated their time to help the animals of this organisation have an improved life. Happy Tails relies completely on donations and the hard work of volunteers, without both of these things we could simply not change the lives of the animals in our care.
     
    Thank you and welcome
    The Happy Tails Family`,
    
    adoptMain: `Thank you for allowing Happy Tails the chance to find you a new family member! We are thrilled to go on this journey with you and thank you for giving a rescue animal a second chance at both love and life.

    Each Happy Tails animal is placed into a dedicated foster home where their true personality gets to shine. For some of our animals, this is the first time they have been in a loving home. They spend time learning how to be a part of a family, learning to trust and learning to love again.
    
    To ensure our animals are adoption ready, they have a thorough veterinary examination which includes a full health check, vaccination/s, spay or castration procedure, microchip implanted and are treated monthly for fleas, worms and ticks. If an animal has further medical or behavioural needs, these are completed prior to being placed up for adoption.
    
    All of this helps us learn what each animal needs to have a Happy Tail.`
}

DynamicTextModel.createOne({...dynamicText})