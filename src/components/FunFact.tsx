// components/FunFact.tsx
import React from 'react';

const facts = [
    "Did you know? The world record for the largest bass ever caught is 22 pounds, 4 ounces!",
    "Fun Fact: Some fish, like the archerfish, can shoot water to knock insects into the water!",
    "Did you know? Flounders can change their color to blend in with the ocean floor!",
    "Fun Fact: Trout have excellent vision and can see in almost all directions at once!",
    "Did you know? Redfish can live up to 50 years in the wild!",
    "Fun Fact: Snook are known for their acrobatics when hooked, often leaping out of the water!",
    "Did you know? Groupers are ambush predators and can swallow prey whole in a single gulp!",
    "Fun Fact: Tarpon, also known as the 'Silver King,' can grow up to 8 feet long and weigh over 280 pounds!",
    "Did you know? Sailfish are the fastest fish in the ocean, reaching speeds of up to 68 mph!",
    "Fun Fact: The smallest saltwater fish is the dwarf goby, measuring less than an inch long!",
    "Did you know? Some species of shrimp can stun fish with a high-pressure bubble created by snapping their claws!",
    "Fun Fact: Bonefish are known for their incredible speed, making them a favorite target for fly fishing!",
    "Did you know? Mullet fish often leap out of the water, but scientists aren't entirely sure why!",
    "Fun Fact: The parrotfish sleeps in a cocoon of its own mucus to protect itself from predators!",
    "Did you know? The lionfish, an invasive species, has venomous spines but is safe to eat!",
    "Fun Fact: Stingrays bury themselves in the sand to ambush prey or hide from predators!",
    "Did you know? Sharks have been around for over 400 million years, predating dinosaurs!",
    "Fun Fact: The barracuda's teeth are so sharp they can slice through prey with surgical precision!",
    "Did you know? The clownfish is immune to the stings of the sea anemone it lives in!",
    "Fun Fact: The blue marlin can grow up to 14 feet long and weigh over 2,000 pounds!",
    "Did you know? Saltwater crocodiles are not fish but are often found in brackish waters where they hunt fish!",
    "Fun Fact: The largest fish in the ocean is the whale shark, which can grow over 40 feet long!",
    "Did you know? The flying fish can glide up to 650 feet to escape predators!",
    "Fun Fact: Some species of saltwater fish can switch genders during their lifetime!",
    "Did you know? Tuna are warm-blooded, which is rare for fish, giving them a significant advantage in speed!",
    "Fun Fact: Flounder start life with eyes on both sides of their heads, but one eye migrates as they mature!",
    "Did you know? The anglerfish uses a bioluminescent lure to attract prey in the deep ocean!",
    "Fun Fact: Seahorses are the only species where males give birth!",
    "Did you know? A single coral reef can support thousands of marine species, acting as an underwater city!",
    "Fun Fact: The mantis shrimp can punch with the speed of a bullet, breaking shells and even aquarium glass!"
];

const FunFact: React.FC = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    return (
        <div className="mt-10 bg-blue-100 p-5 rounded-lg shadow-md">
            <h3 className="text-center text-lg font-bold text-blue-600 mb-3">🐟 Fun Fact 🐟</h3>
            <p className="text-center text-gray-700">{randomFact}</p>
        </div>
    );
};

export default FunFact;
