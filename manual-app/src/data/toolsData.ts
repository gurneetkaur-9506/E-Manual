export interface CableSpec {
  id: string;
  name: string;
  manufacturer: string;
  type: string;
  impedance: number; // Ohms
  velocityOfPropagation: number; // %
  maxRecommendedLengthM: number;
  maxRecommendedLengthFt: number;
  diameterMm: number;
  minBendRadiusStaticMm: number;
  minBendRadiusDynamicMm: number;
  weightKgM: number;
  attenuationPer100m: { [freqMhz: number]: number }; // dB per 100m
  attenuationPer100ft: { [freqMhz: number]: number }; // dB per 100ft
  recommendedApplications: string;
}

export const cableSpecsData: CableSpec[] = [
  {
    id: "lmr400",
    name: "Times Microwave LMR-400",
    manufacturer: "Times Microwave Systems",
    type: "Low Loss Flexible Coaxial Cable",
    impedance: 50,
    velocityOfPropagation: 85,
    maxRecommendedLengthM: 60,
    maxRecommendedLengthFt: 200,
    diameterMm: 10.29,
    minBendRadiusStaticMm: 25.4,
    minBendRadiusDynamicMm: 101.6,
    weightKgM: 0.10,
    attenuationPer100m: {
      30: 2.2,
      50: 2.9,
      150: 5.0,
      220: 6.1,
      450: 8.9,
      900: 12.8,
      1500: 16.8,
      1800: 18.6,
      2000: 19.6,
      2500: 22.2
    },
    attenuationPer100ft: {
      30: 0.7,
      50: 0.9,
      150: 1.5,
      220: 1.9,
      450: 2.7,
      900: 3.9,
      1500: 5.1,
      1800: 5.7,
      2000: 6.0,
      2500: 6.8
    },
    recommendedApplications: "Standard vessel GNSS and L-band cable runs up to 60 meters (200 ft)."
  },
  {
    id: "lmr240",
    name: "Times Microwave LMR-240",
    manufacturer: "Times Microwave Systems",
    type: "Flexible Low Loss Coaxial Cable",
    impedance: 50,
    velocityOfPropagation: 84,
    maxRecommendedLengthM: 30,
    maxRecommendedLengthFt: 100,
    diameterMm: 6.10,
    minBendRadiusStaticMm: 19.1,
    minBendRadiusDynamicMm: 63.5,
    weightKgM: 0.05,
    attenuationPer100m: {
      30: 4.4,
      50: 5.7,
      150: 9.9,
      220: 12.0,
      450: 17.3,
      900: 24.8,
      1500: 32.4,
      1800: 35.6,
      2000: 37.7,
      2500: 42.4
    },
    attenuationPer100ft: {
      30: 1.3,
      50: 1.7,
      150: 3.0,
      220: 3.7,
      450: 5.3,
      900: 7.6,
      1500: 9.9,
      1800: 10.9,
      2000: 11.5,
      2500: 12.9
    },
    recommendedApplications: "Short runs up to 30 m (100 ft) and flexible jumper tails connecting antennas to main runs."
  },
  {
    id: "ldf450",
    name: "CommScope Andrew Heliax LDF4-50A",
    manufacturer: "CommScope",
    type: "1/2\" Foam-Dielectric Corrugated Copper Coaxial Cable",
    impedance: 50,
    velocityOfPropagation: 88,
    maxRecommendedLengthM: 100,
    maxRecommendedLengthFt: 330,
    diameterMm: 16.0,
    minBendRadiusStaticMm: 50.0,
    minBendRadiusDynamicMm: 125.0,
    weightKgM: 0.22,
    attenuationPer100m: {
      30: 1.1,
      50: 1.4,
      150: 2.5,
      220: 3.1,
      450: 4.5,
      900: 6.6,
      1500: 8.8,
      1800: 9.7,
      2000: 10.3,
      2500: 11.7
    },
    attenuationPer100ft: {
      30: 0.34,
      50: 0.44,
      150: 0.77,
      220: 0.94,
      450: 1.37,
      900: 2.01,
      1500: 2.68,
      1800: 2.97,
      2000: 3.14,
      2500: 3.57
    },
    recommendedApplications: "Long primary runs up to 100 m (330 ft) through vessel cable trays and riser trunks."
  },
  {
    id: "rg214",
    name: "Belden RG214",
    manufacturer: "Belden",
    type: "Double-Shielded Precision Coaxial Cable",
    impedance: 50,
    velocityOfPropagation: 66,
    maxRecommendedLengthM: 20,
    maxRecommendedLengthFt: 65,
    diameterMm: 10.80,
    minBendRadiusStaticMm: 54.0,
    minBendRadiusDynamicMm: 108.0,
    weightKgM: 0.20,
    attenuationPer100m: {
      30: 3.8,
      50: 5.0,
      150: 9.2,
      220: 11.5,
      450: 17.5,
      900: 26.5,
      1500: 37.0,
      1800: 41.5,
      2000: 44.5,
      2500: 51.0
    },
    attenuationPer100ft: {
      30: 1.16,
      50: 1.52,
      150: 2.80,
      220: 3.50,
      450: 5.33,
      900: 8.08,
      1500: 11.28,
      1800: 12.65,
      2000: 13.56,
      2500: 15.54
    },
    recommendedApplications: "Short marine installations up to 20 m (65 ft) and flexible equipment tails."
  }
];

export interface SpacingRule {
  transmitterType: string;
  minVerticalDistanceM: number;
  minVerticalDistanceFt: number;
  minHorizontalDistanceM: number;
  minHorizontalDistanceFt: number;
  beamZoneAngleDeg?: number;
  inBeamHorizontalDistanceM?: number;
  inBeamHorizontalDistanceFt?: number;
  riskDescription: string;
  recommendation: string;
}

export const spacingRulesData: SpacingRule[] = [
  {
    transmitterType: "Marine Radar (S-Band / X-Band Scanner)",
    minVerticalDistanceM: 3.0,
    minVerticalDistanceFt: 10.0,
    minHorizontalDistanceM: 10.0,
    minHorizontalDistanceFt: 33.0,
    beamZoneAngleDeg: 15,
    riskDescription: "Severe RF pulse front-end overload, burnout of LNA, and intermittent satellite tracking drops.",
    recommendation: "Always mount GNSS/L-band antennas above or below the active horizontal radar sweep zone (outside ±15° elevation from scanner plane)."
  },
  {
    transmitterType: "Satellite Communications (Inmarsat / VSAT / FleetBroadband)",
    minVerticalDistanceM: 3.0,
    minVerticalDistanceFt: 10.0,
    minHorizontalDistanceM: 5.0,
    minHorizontalDistanceFt: 16.5,
    inBeamHorizontalDistanceM: 10.0,
    inBeamHorizontalDistanceFt: 33.0,
    riskDescription: "Inmarsat and VSAT transmit power can saturate GNSS receiver front-ends and cause complete L-band correction signal lock loss.",
    recommendation: "Ensure antenna is never in the direct line of transmission of any parabolic or phased-array satellite dish."
  },
  {
    transmitterType: "VHF Marine Transceiver (156 - 174 MHz)",
    minVerticalDistanceM: 1.5,
    minVerticalDistanceFt: 5.0,
    minHorizontalDistanceM: 1.5,
    minHorizontalDistanceFt: 5.0,
    riskDescription: "Harmonics and broadband RF emissions during voice transmissions can degrade C/No on nearby GNSS antennas.",
    recommendation: "Keep minimum 1.5 m (5 ft) clearance from all vertical VHF whip antennas."
  },
  {
    transmitterType: "High-Frequency (HF) SSB Transceiver / Whip",
    minVerticalDistanceM: 5.0,
    minVerticalDistanceFt: 16.5,
    minHorizontalDistanceM: 5.0,
    minHorizontalDistanceFt: 16.5,
    riskDescription: "High transmitter power (up to 1 kW) can induce massive RF voltages into nearby cables and antennas.",
    recommendation: "Maintain at least 5 m (16.5 ft) separation from active HF antennas and insulated backstays."
  },
  {
    transmitterType: "Adjacent GNSS Antenna (Baseline Separation)",
    minVerticalDistanceM: 0.3,
    minVerticalDistanceFt: 1.0,
    minHorizontalDistanceM: 0.5,
    minHorizontalDistanceFt: 1.6,
    riskDescription: "Proximity closer than 0.5 m can cause re-radiation and mutual impedance coupling between antenna elements.",
    recommendation: "Maintain at least 0.5 m (1.6 ft) separation between separate GNSS antennas; maintain > 1.0 m (3.3 ft) for heading pair baselines."
  }
];

export interface TerminationProcedure {
  id: string;
  cableType: string;
  connectorType: string;
  partNumber: string;
  toolsRequired: string[];
  materialsRequired: string[];
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    details: string;
    criticalNotes?: string[];
  }[];
}

export const terminationProceduresData: TerminationProcedure[] = [
  {
    id: "lmr400_termination",
    cableType: "Times Microwave LMR-400",
    connectorType: "N-Type Male Non-Solder Crimp",
    partNumber: "EZ-400-NMH-X",
    toolsRequired: [
      "Cable prep tool (CST-400)",
      "Crimp tool with 0.429\" hex die (CT-400/300)",
      "Cable cutter / Stanley knife",
      "Deburring tool or small file",
      "Heat gun"
    ],
    materialsRequired: [
      "Adhesive-lined heat shrink tubing",
      "Crimp collar",
      "EZ-400-NMH-X connector body"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Slide Components & Cut Square",
        description: "Slide adhesive-lined heat shrink and crimp collar onto the cable. Cut cable end at 90°.",
        details: "Ensure the cut is cleanly squared off without ovalizing or distorting the outer jacket."
      },
      {
        stepNumber: 2,
        title: "Strip Cable Outer Jacket & Dielectric",
        description: "Using CST-400 prep tool, strip the outer jacket, braid, and dielectric to specified dimensions.",
        details: "Rotate prep tool clockwise until resistance drops. Strip leaves exposed center conductor and exposed braid.",
        criticalNotes: ["Do not nick or score the center copper conductor."]
      },
      {
        stepNumber: 3,
        title: "Deburr Center Conductor",
        description: "Remove residual dielectric and deburr the tip of the center conductor.",
        details: "A slight chamfer on the tip helps the spring-finger contact of the EZ connector seat effortlessly."
      },
      {
        stepNumber: 4,
        title: "Flare Outer Braid",
        description: "Gently flare the braided outer shield wires away from the dielectric core.",
        details: "Ensure no loose aluminum foil shield strips touch the center conductor."
      },
      {
        stepNumber: 5,
        title: "Insert Cable into Connector Body",
        description: "Push the cable firmly into the connector body until the center conductor fully engages.",
        details: "Listen/feel for positive seating. The dielectric must sit flush against the internal stop."
      },
      {
        stepNumber: 6,
        title: "Slide Crimp Collar Over Braid",
        description: "Slide crimp collar forward over the connector sleeve and flared braid.",
        details: "Ensure all braid strands are trapped uniformly beneath the collar."
      },
      {
        stepNumber: 7,
        title: "Crimp Collar with Hex Die",
        description: "Using CT-400 crimp tool (0.429\" hex die), crimp the collar securely.",
        details: "Position crimp die against the connector shoulder and cycle tool until ratchet releases."
      },
      {
        stepNumber: 8,
        title: "Shrink Weatherproof Heat Shrink",
        description: "Slide adhesive-lined heat shrink over connector rear and shrink using heat gun.",
        details: "Apply heat evenly from center outward until adhesive flows from both ends."
      }
    ]
  },
  {
    id: "ldf450_termination",
    cableType: "CommScope Andrew Heliax LDF4-50A (1/2\")",
    connectorType: "N-Type Male Positive Stop",
    partNumber: "L4TNM-PSA",
    toolsRequired: [
      "Hacksaw with fine blade (32 TPI)",
      "Automated prep tool (CPT-L4ARC1) or knife",
      "Deburring tool / fine flat file",
      "Adjustable spanners (pair of 22 mm / 7/8\")",
      "Clean wire brush",
      "Silicone grease"
    ],
    materialsRequired: [
      "L4TNM-PSA connector kit",
      "O-ring seal and silicone lubricant",
      "Self-amalgamating tape (Scotch 23)",
      "Vinyl tape (Scotch Super 33+)"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Square Cut Cable End",
        description: "Using a hacksaw, cut the end of the LDF4-50A cable at 90° to leave a clean, square edge.",
        details: "Support cable to avoid crushing corrugated outer copper tube."
      },
      {
        stepNumber: 2,
        title: "Remove Outer Jacket",
        description: "Remove the polyethylene jacket back 25 mm (1 inch) from the cut end.",
        details: "Use knife carefully to avoid scoring corrugated outer copper conductor."
      },
      {
        stepNumber: 3,
        title: "Trim Outer Corrugation",
        description: "Cut outer conductor at the crest of the corrugation using hacksaw blade.",
        details: "Cut around circumference only through the outer copper wall."
      },
      {
        stepNumber: 4,
        title: "Remove Foam Dielectric",
        description: "Scrape away foam dielectric and adhesive from center conductor.",
        details: "Ensure center copper conductor is clean and free from residual foam."
      },
      {
        stepNumber: 5,
        title: "Fit O-Ring Seal",
        description: "Apply silicone grease to O-ring and seat in outer conductor valley.",
        details: "O-ring provides first primary moisture barrier against jacket."
      },
      {
        stepNumber: 6,
        title: "Chamfer Center Conductor",
        description: "Taper the tip of the center conductor with a fine file.",
        details: "Deburr edges to prevent damaging female contact socket in connector body."
      },
      {
        stepNumber: 7,
        title: "Brush and Clean Debris",
        description: "Brush away all copper filings and metal shavings with clean wire brush.",
        details: "Ensure no copper shavings or loose wire filings remain in the connector core.",
        criticalNotes: ["Metal particles inside connector will cause high VSWR or short circuits."]
      },
      {
        stepNumber: 8,
        title: "Assemble Connector Body",
        description: "Push connector body onto cable until clamping mechanism engages outer corrugation.",
        details: "Engage threads smoothly by hand."
      },
      {
        stepNumber: 9,
        title: "Tighten to Positive Stop",
        description: "Using two spanners, tighten the rear clamping nut until it reaches the positive stop shoulder.",
        details: "No torque wrench required once positive metal-to-metal stop is reached."
      }
    ]
  }
];

export interface InmarsatSatellite {
  name: string;
  orbitalSlot: string;
  longitude: number;
  coverageRegion: string;
  elevationLimit: string;
  beamFreqRange: string;
}

export const inmarsatSatellitesData: InmarsatSatellite[] = [
  {
    name: "AOR-W (Atlantic Ocean Region West)",
    orbitalSlot: "54.0° W",
    longitude: -54.0,
    coverageRegion: "Americas, Atlantic Ocean, Western Europe, West Africa",
    elevationLimit: "5° to 90°",
    beamFreqRange: "1525.0 - 1559.0 MHz"
  },
  {
    name: "AOR-E (Atlantic Ocean Region East)",
    orbitalSlot: "15.5° W",
    longitude: -15.5,
    coverageRegion: "Europe, Africa, Atlantic Ocean, Eastern South America",
    elevationLimit: "5° to 90°",
    beamFreqRange: "1525.0 - 1559.0 MHz"
  },
  {
    name: "25E (Europe/Middle East/Africa)",
    orbitalSlot: "25.0° E",
    longitude: 25.0,
    coverageRegion: "Europe, Mediterranean, Middle East, Africa, Western Asia",
    elevationLimit: "5° to 90°",
    beamFreqRange: "1525.0 - 1559.0 MHz"
  },
  {
    name: "IOR (Indian Ocean Region)",
    orbitalSlot: "64.0° E",
    longitude: 64.0,
    coverageRegion: "Indian Ocean, Middle East, South Asia, East Africa, Western Australia",
    elevationLimit: "5° to 90°",
    beamFreqRange: "1525.0 - 1559.0 MHz"
  },
  {
    name: "POR (Pacific Ocean Region)",
    orbitalSlot: "178.0° E",
    longitude: 178.0,
    coverageRegion: "Pacific Ocean, East Asia, Australia, New Zealand, West Coast North America",
    elevationLimit: "5° to 90°",
    beamFreqRange: "1525.0 - 1559.0 MHz"
  }
];
