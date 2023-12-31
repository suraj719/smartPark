const smartPark = {
  address: "0x25b6031127505279711B665e7B5658d6963E579f",
  abi: [
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "addSpot",
      inputs: [
        { type: "bool", name: "_available", internalType: "bool" },
        { type: "string[]", name: "_docs", internalType: "string[]" },
        { type: "string", name: "_latLong", internalType: "string" },
        { type: "uint256", name: "_pinCode", internalType: "uint256" },
        { type: "string", name: "_spotType", internalType: "string" },
        { type: "uint256", name: "_number", internalType: "uint256" },
        { type: "uint256", name: "_price", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "bookSpot",
      inputs: [
        { type: "uint256", name: "_spotId", internalType: "uint256" },
        { type: "uint256", name: "_vehicleId", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [
        { type: "string", name: "id", internalType: "string" },
        { type: "uint256", name: "bookingTime", internalType: "uint256" },
        { type: "uint256", name: "parkingInTime", internalType: "uint256" },
        { type: "uint256", name: "parkingOutTime", internalType: "uint256" },
        { type: "bool", name: "payment", internalType: "bool" },
        { type: "string", name: "txnUrl", internalType: "string" },
        { type: "string", name: "txnChain", internalType: "string" },
        { type: "uint256", name: "charges", internalType: "uint256" },
        { type: "uint256", name: "checkInTime", internalType: "uint256" },
        { type: "uint256", name: "checkOutTime", internalType: "uint256" },
        { type: "bool", name: "verified", internalType: "bool" },
      ],
      name: "bookingList",
      inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "createOwner",
      inputs: [
        { type: "string", name: "_name", internalType: "string" },
        { type: "string", name: "_gender", internalType: "string" },
        { type: "uint256", name: "_age", internalType: "uint256" },
        { type: "address", name: "_id", internalType: "address" },
        { type: "string", name: "_email", internalType: "string" },
        { type: "uint256", name: "_drivingLicense", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "createVehicleIdentity",
      inputs: [
        { type: "string", name: "_name", internalType: "string" },
        { type: "string", name: "_licensePlate", internalType: "string" },
        { type: "string", name: "_vehicleType", internalType: "string" },
        { type: "string[]", name: "_docs", internalType: "string[]" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [
        {
          type: "tuple",
          name: "",
          internalType: "struct SmartPark.Owner",
          components: [
            { type: "string" },
            { type: "uint256" },
            { type: "string" },
            { type: "address" },
            { type: "string" },
            { type: "uint256" },
          ],
        },
      ],
      name: "getOwner",
      inputs: [{ type: "address", name: "_address", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [
        {
          type: "tuple[]",
          name: "",
          internalType: "struct SmartPark.ParkingSpot[]",
          components: [
            { type: "uint256" },
            { type: "bool" },
            { type: "string" },
            { type: "uint256" },
            { type: "string" },
            { type: "uint256" },
            { type: "string[]" },
            { type: "address" },
            { type: "uint256" },
            { type: "bool" },
          ],
        },
      ],
      name: "getOwnerSpots",
      inputs: [{ type: "address", name: "_address", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [
        {
          type: "tuple[]",
          name: "",
          internalType: "struct SmartPark.VehicleData[]",
          components: [
            { type: "uint256" },
            { type: "string" },
            { type: "string" },
            { type: "string" },
            { type: "string[]" },
            { type: "address" },
            { type: "bool" },
          ],
        },
      ],
      name: "getOwnerVehicles",
      inputs: [{ type: "address", name: "_address", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "payable",
      outputs: [],
      name: "makePayment",
      inputs: [{ type: "uint256", name: "_value", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [
        { type: "string", name: "name", internalType: "string" },
        { type: "uint256", name: "age", internalType: "uint256" },
        { type: "string", name: "gender", internalType: "string" },
        { type: "address", name: "id", internalType: "address" },
        { type: "string", name: "email", internalType: "string" },
        { type: "uint256", name: "drivingLicense", internalType: "uint256" },
      ],
      name: "owners",
      inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [
        { type: "uint256", name: "id", internalType: "uint256" },
        { type: "bool", name: "available", internalType: "bool" },
        { type: "string", name: "latLong", internalType: "string" },
        { type: "uint256", name: "pinCode", internalType: "uint256" },
        { type: "string", name: "spotType", internalType: "string" },
        { type: "uint256", name: "number", internalType: "uint256" },
        { type: "address", name: "owner", internalType: "address" },
        { type: "uint256", name: "price", internalType: "uint256" },
        { type: "bool", name: "verified", internalType: "bool" },
      ],
      name: "parkingSpotList",
      inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [
        { type: "uint256", name: "id", internalType: "uint256" },
        { type: "bool", name: "available", internalType: "bool" },
        { type: "string", name: "latLong", internalType: "string" },
        { type: "uint256", name: "pinCode", internalType: "uint256" },
        { type: "string", name: "spotType", internalType: "string" },
        { type: "uint256", name: "number", internalType: "uint256" },
        { type: "address", name: "owner", internalType: "address" },
        { type: "uint256", name: "price", internalType: "uint256" },
        { type: "bool", name: "verified", internalType: "bool" },
      ],
      name: "parkingSpots",
      inputs: [
        { type: "uint256", name: "", internalType: "uint256" },
        { type: "uint256", name: "", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "prices",
      inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "releaseSpot",
      inputs: [{ type: "uint256", name: "_spotId", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "transferSpotOwnership",
      inputs: [
        { type: "uint256", name: "_spotId", internalType: "uint256" },
        { type: "address", name: "_newOwner", internalType: "address" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [
        { type: "uint256", name: "id", internalType: "uint256" },
        { type: "string", name: "name", internalType: "string" },
        { type: "string", name: "licensePlate", internalType: "string" },
        { type: "string", name: "vehicleType", internalType: "string" },
        { type: "address", name: "owner", internalType: "address" },
        { type: "bool", name: "verified", internalType: "bool" },
      ],
      name: "vehicleDataList",
      inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    },
    {
      type: "event",
      name: "PaymentReceived",
      inputs: [
        { type: "address", name: "vehicleOwner", indexed: true },
        { type: "uint256", name: "value", indexed: false },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "SpotBooked",
      inputs: [
        { type: "address", name: "owner", indexed: true },
        { type: "address", name: "vehicleIdentity", indexed: true },
        { type: "uint256", name: "spotId", indexed: false },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "SpotReleased",
      inputs: [
        { type: "address", name: "owner", indexed: true },
        { type: "address", name: "vehicleIdentity", indexed: true },
        { type: "uint256", name: "spotId", indexed: false },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "SpotTransferred",
      inputs: [
        { type: "address", name: "previousOwner", indexed: true },
        { type: "address", name: "newOwner", indexed: true },
        { type: "uint256", name: "spotId", indexed: false },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "VehicleIdentityCreated",
      inputs: [
        { type: "address", name: "owner", indexed: true },
        { type: "uint256", name: "vehicleId", indexed: false },
      ],
      anonymous: false,
    },
  ],
};

export default smartPark;