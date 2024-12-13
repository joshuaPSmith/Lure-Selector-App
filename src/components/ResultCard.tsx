import React from 'react';

        interface ResultCardProps {
            recommendations: string[];
        }

        const ResultCard: React.FC<ResultCardProps> = ({ recommendations }) => {
            return (
                <div className="p-4 border rounded bg-white shadow">
                    <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
                    {recommendations.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {recommendations.map((rec, index) => (
                                <li key={index}>{rec}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No recommendations yet. Please select all options.</p>
                    )}
                </div>
            );
        };

        export default ResultCard;