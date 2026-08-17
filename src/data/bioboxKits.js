const middleSchoolKits = [
  ["Cell City", "cell-city", "Model how cell structures work together as a living system.", "MS TEKS: Cells & systems", "Cell membrane, nucleus, and organelles", "Build a labeled cell model, then have teams explain how a missing organelle affects the system."],
  ["Microscope Detectives", "microscope-detectives", "Use prepared slides to look for patterns in plant and animal cells.", "MS TEKS: Cells & microscopy", "Microscope parts, cells, and observation", "Rotate through slides, create a field-sketch journal, and compare evidence from each sample."],
  ["Strawberry DNA", "strawberry-dna", "Make DNA visible with a safe fruit extraction investigation.", "MS TEKS: Heredity & traits", "DNA, cells, and genetic information", "Use the extraction as a claim-evidence-reasoning launch: Where did the cloudy strands come from?"],
  ["Trait Trackers", "trait-trackers", "Model inherited and acquired traits with a hands-on sorting challenge.", "MS TEKS: Heredity", "Inherited traits, variation, and environment", "Sort trait cards, graph class patterns, and discuss why a trait may not tell a whole family story."],
  ["Ecosystem in a Box", "ecosystem-in-a-box", "Trace how living and nonliving parts of an ecosystem depend on each other.", "MS TEKS: Ecosystems", "Biotic factors, abiotic factors, and interactions", "Build a tabletop ecosystem, then introduce a weather or population change and record the consequences."],
  ["Food Web Balance", "food-web-balance", "Follow energy through a food web and see what happens when one species changes.", "MS TEKS: Energy flow", "Producers, consumers, decomposers, and food webs", "Students connect organism cards with yarn and test a disruption scenario as a whole-class model."],
  ["Owl Pellet Investigators", "owl-pellet-investigators", "Use evidence from an owl pellet to reconstruct a local food web.", "MS TEKS: Organisms & ecosystems", "Predator-prey relationships and adaptations", "Create a data table from findings, identify prey, and connect the evidence to an ecosystem map."],
  ["Pollinator Power", "pollinator-power", "Explore the structures and behaviors that make pollination possible.", "MS TEKS: Adaptations", "Plant reproduction, pollinators, and structure-function", "Compare flower designs, simulate pollen transfer, and propose a pollinator-friendly school habitat."],
  ["Water Quality Watch", "water-quality-watch", "Test model water samples and investigate what makes a watershed healthy.", "MS TEKS: Earth systems", "Water resources, human impact, and environmental quality", "Run a station lab with pH and clarity observations, then create an evidence-based cleanup recommendation."],
  ["Soil Scientists", "soil-scientists", "Compare soil samples to uncover the ingredients that support life.", "MS TEKS: Earth systems", "Soil, nutrients, and cycling of matter", "Observe texture and water movement, then connect soil properties to plant-growth choices."],
  ["Rockin’ Fossils", "rockin-fossils", "Read fossil clues to infer how organisms and environments change over time.", "MS TEKS: Earth history", "Fossils, change over time, and evidence", "Sequence fossil evidence cards, defend an environmental inference, and build a class timeline."],
  ["Weather Lab", "weather-lab", "Collect and interpret weather data like a field scientist.", "MS TEKS: Weather & climate", "Atmosphere, weather patterns, and data", "Use simple tools for a week of observations and turn the class data into a forecast."],
  ["Force & Flight", "force-and-flight", "Design and test paper fliers to investigate balanced and unbalanced forces.", "MS TEKS: Force & motion", "Forces, motion, and engineering design", "Run controlled flight tests, revise one variable, and share a data-backed redesign."],
  ["Light & Color", "light-and-color", "Investigate how light interacts with materials, pigments, and our eyes.", "MS TEKS: Energy", "Light, reflection, absorption, and waves", "Test filters and surfaces, collect observations, and explain a color effect with a particle or wave model."],
  ["Body Systems Relay", "body-systems-relay", "Follow materials through connected body systems in a collaborative relay.", "MS TEKS: Organisms & systems", "Human body systems and homeostasis", "Assign system roles, move a ‘nutrient’ token through the model, and troubleshoot a system disruption."],
];

const highSchoolKits = [
  ["DNA Extraction & Analysis", "hs-dna-extraction", "Extract DNA and connect its structure to biological information.", "Biology TEKS: Molecular genetics", "DNA structure, genes, and evidence", "Pair a fruit extraction with a structure-to-function model and a short evidence-based explanation."],
  ["Protein Synthesis Studio", "protein-synthesis", "Decode a gene sequence into a protein with a collaborative model.", "Biology TEKS: Gene expression", "Transcription, translation, and mutations", "Have students translate codons, introduce a mutation card, and predict the resulting protein change."],
  ["Mendel’s Lab", "mendels-lab", "Use probability models to predict patterns of inheritance.", "Biology TEKS: Heredity", "Alleles, meiosis, and inheritance", "Run a coin or bead simulation, compare expected and observed ratios, and explain variation."],
  ["Natural Selection Case File", "natural-selection", "Analyze changing populations through a real-world selection scenario.", "Biology TEKS: Evolution", "Natural selection, adaptation, and population change", "Graph population data across generations and support a claim about the selective pressure."],
  ["Population Ecology Lab", "population-ecology", "Model limiting factors and carrying capacity in a changing population.", "Biology TEKS: Ecology", "Population dynamics and resource limits", "Use a bean-based simulation, graph the data, and connect the model’s limits to a local species."],
  ["Carbon Cycle Challenge", "carbon-cycle", "Trace carbon across Earth systems and examine human impacts.", "Biology TEKS: Ecosystem processes", "Carbon cycling, photosynthesis, and respiration", "Students travel through a carbon-cycle game, then revise the system after an emissions scenario."],
  ["Enzyme Engineering", "enzyme-engineering", "Measure how conditions influence enzyme-driven reactions.", "Biology TEKS: Cellular processes", "Enzymes, activation energy, and homeostasis", "Plan a controlled catalase investigation and evaluate which condition best preserves activity."],
  ["Cellular Respiration Lab", "cellular-respiration", "Use yeast to investigate how cells release energy from food.", "Biology TEKS: Cellular processes", "Respiration, fermentation, and ATP", "Collect gas-production data, graph rates, and distinguish aerobic from anaerobic pathways."],
  ["Photosynthesis Investigation", "photosynthesis-investigation", "Gather evidence for the conditions plants need to capture light energy.", "Biology TEKS: Cellular processes", "Photosynthesis, chloroplasts, and matter cycling", "Test a plant-based model under changing light conditions and connect results to the photosynthesis equation."],
  ["Diffusion & Osmosis", "diffusion-and-osmosis", "Investigate how membranes regulate movement and maintain balance.", "Biology TEKS: Homeostasis", "Diffusion, osmosis, and cell transport", "Use model cells, calculate percent change, and explain how a cell responds to its environment."],
  ["Immune System Detectives", "immune-system-detectives", "Follow the body’s defense response through an evidence-based case study.", "Biology TEKS: Body systems", "Immune response, pathogens, and system interactions", "Map a patient timeline, identify immune-system roles, and evaluate prevention strategies."],
  ["Neuroscience & Senses", "neuroscience-and-senses", "Explore how neurons communicate and how senses shape perception.", "Biology TEKS: Body systems", "Nervous system, feedback, and response", "Use a reaction-time investigation, analyze class variability, and model a neural pathway."],
  ["Biodiversity Survey", "biodiversity-survey", "Measure biodiversity and use the findings to make a conservation recommendation.", "Biology TEKS: Ecology", "Biodiversity, populations, and conservation", "Conduct a schoolyard survey or analyze a sample dataset, then make an evidence-based management proposal."],
  ["Biotechnology Ethics Lab", "biotechnology-ethics", "Examine how biotechnology can solve problems and raise new questions.", "Biology TEKS: Biotechnology", "Genetic technologies, evidence, and ethics", "Interpret a simplified biotechnology case, weigh stakeholder perspectives, and write a supported recommendation."],
  ["Homeostasis Under Stress", "homeostasis-under-stress", "Use body data to investigate feedback mechanisms that keep conditions stable.", "Biology TEKS: Homeostasis", "Feedback loops, regulation, and body systems", "Collect safe pulse or temperature-recovery data, graph trends, and model negative feedback."],
];

const makeKit = ([name, slug, summary, teks, concepts, classroomIntegration], level, index) => ({
  name,
  slug,
  level,
  number: String(index + 1).padStart(2, "0"),
  summary,
  teks,
  concepts,
  image: "",
  classroomIntegration,
  scienceCard: {
    question: `What evidence can help us explain ${name.toLowerCase()}?`,
    takeaway: `Students use observations, models, and data to connect ${concepts.toLowerCase()} to a larger biological system.`,
    materials: "Kit materials, student handouts, notebooks, and standard classroom safety supplies.",
  },
  expansionCard: `Extend the investigation by asking students to change one variable, analyze a new data set, or connect the phenomenon to a local Texas example.`,
  curriculumFit: `${teks}. This flexible kit is designed as a 30–50 minute investigation, station, or small-group enrichment activity.`,
});

export const bioboxCollections = [
  { id: "middle-school", label: "Middle School", grades: "Grades 6–8", kits: middleSchoolKits.map((kit, index) => makeKit(kit, "Middle School", index)) },
  { id: "high-school", label: "High School", grades: "Biology & advanced science", kits: highSchoolKits.map((kit, index) => makeKit(kit, "High School", index)) },
];

export const allBioBoxKits = bioboxCollections.flatMap((collection) => collection.kits);
export const getBioBoxKit = (slug) => allBioBoxKits.find((kit) => kit.slug === slug);
