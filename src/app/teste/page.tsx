'use client'
import React from 'react';
import { useFetchSplits } from "@/app/hooks/useFetch";

const CreateTraining = () => {
    const splits = useFetchSplits();

    return (
        <div className="flex flex-col h-full p-4">
            <p className="text-xl">Crie seu treino!💪</p>
            <form className="grid grid-cols-2 gap-4 my-4 justify-between">
                {splits.map((split) => (
                    <div key={split.ID} className="flex items-center justify-center bg-[#0B46C7] text-white p-2 rounded">
                        <input
                            type="radio"
                            id={split.ID}
                            name="trainingSplit"
                        />
                        <label htmlFor={split.ID} className="ml-2">
                            {split.Name}
                        </label>
                    </div>
                ))}
                <button type="submit" className="py-4 bg-[#0B46C7] border rounded-full">
                    Criar Treino
                </button>
            </form>
        </div>
    );
}

export default CreateTraining;
