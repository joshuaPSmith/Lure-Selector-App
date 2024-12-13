// App.tsx
import React, { useState } from 'react';
import ResultCard from './components/ResultCard';
import FunFact from './components/FunFact';
import Weather from './components/Weather';

const App: React.FC = () => {
    const [lightCondition, setLightCondition] = useState<string>('');
    const [waterClarity, setWaterClarity] = useState<string>('');
    const [species, setSpecies] = useState<string>('');

    const speciesInfo: Record<string, string> = {
        Reds: "Redfish are known for their copper-bronze bodies and spotted tails, and they thrive in shallow coastal waters.",
        Trout: "Trout are prized for their fight and often found in clear, cool streams or coastal saltwater flats.",
        Snook: "Snook are sleek predators that prefer warm, shallow waters and are known for their explosive strikes.",
        Flounder: "Flounder are bottom-dwelling fish with a unique flat body, blending into sandy or muddy environments."
    };

    const recommendations: Record<string, Record<string, Record<string, string[]>>> = {
        "Low Light": {
            "Stained": {
                "Reds": ["Chartreuse", "Orange/Red"],
                "Trout": ["Chartreuse/Pink", "Darker tones"],
                "Snook": ["Black", "Purple", "Chartreuse"],
                "Flounder": ["Chartreuse", "Pink"]
            },
            "Clear": {
                "Reds": ["Gold", "Root Beer"],
                "Trout": ["Natural", "White"],
                "Snook": ["Gold", "Purple"],
                "Flounder": ["White", "Pumpkin Brown"]
            }
        },
        "Bright Light": {
            "Clear": {
                "Reds": ["Gold", "Natural", "Root Beer"],
                "Trout": ["Silver", "White", "Natural"],
                "Snook": ["Natural", "Silver", "Gold", "Purple"],
                "Flounder": ["White", "Pumpkin Brown", "Pink"]
            },
            "Stained": {
                "Reds": ["Chartreuse", "Gold"],
                "Trout": ["Chartreuse", "Silver"],
                "Snook": ["Gold", "Chartreuse"],
                "Flounder": ["Chartreuse", "Pink"]
            }
        }
    };

    const getRecommendations = () => {
        if (lightCondition && waterClarity && species) {
            return recommendations[lightCondition]?.[waterClarity]?.[species] || [];
        }
        return [];
    };

    return (
        <div className="bg-gradient-to-b from-teal-200 to-green-200 p-5 min-h-screen font-sans">
            <h1 className="text-center text-4xl font-bold text-orange-600 mb-5">🎣 Lure Selector 🎣</h1>
            <Weather setLightCondition={setLightCondition} />
            <p className="text-center text-gray-700 mb-6">Select the conditions and species to find the best lures for your fishing trip!</p>
            <div className="mb-6">
                <label className="block mb-2 font-semibold">Light Condition</label>
                <select
                    className="w-full p-3 border-2 border-orange-400 rounded bg-white"
                    value={lightCondition}
                    onChange={(e) => setLightCondition(e.target.value)}
                >
                    <option value="">Select Light Condition</option>
                    <option value="Low Light">🌙 Low Light</option>
                    <option value="Bright Light">☀️ Bright Light</option>
                </select>
            </div>
            <div className="mb-6">
                <label className="block mb-2 font-semibold">Water Clarity</label>
                <select
                    className="w-full p-3 border-2 border-green-400 rounded bg-white"
                    value={waterClarity}
                    onChange={(e) => setWaterClarity(e.target.value)}
                >
                    <option value="">Select Water Clarity</option>
                    <option value="Clear">💧 Clear</option>
                    <option value="Stained">🌫️ Stained</option>
                </select>
            </div>
            <div className="mb-6">
                <label className="block mb-2 font-semibold">Target Species</label>
                <select
                    className="w-full p-3 border-2 border-yellow-400 rounded bg-white"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                >
                    <option value="">Select Target Species</option>
                    <option value="Reds">🐟 Reds</option>
                    <option value="Trout">🎣 Trout</option>
                    <option value="Snook">🐠 Snook</option>
                    <option value="Flounder">🦈 Flounder</option>
                </select>
            </div>
            {species && <p className="mb-6 text-gray-700 text-center">{speciesInfo[species]}</p>}
            <ResultCard recommendations={getRecommendations()} />
            <FunFact />
        </div>
    );
};

export default App;