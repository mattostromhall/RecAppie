import React, {useState} from 'react'
import DeleteRecipeStep from './DeleteRecipeStep'
import EditRecipeStep from './EditRecipeStep'

export default function EditableRecipeStep({ step, lastStep }) {
    const [showDelete, setShowDelete] = useState(false)
    const [editMode, setEditMode] = useState(false)

    function toggleDelete() {
        setShowDelete(!showDelete)
    }

    function toggleEditMode() {
        setEditMode(!editMode)
    }

    return (
        <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                {!lastStep &&
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"/>
                }
            </div>
            <button
                className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10 cursor-pointer focus:outline-none focus:ring focus:ring-indigo-300"
                onDoubleClick={toggleDelete}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </button>
            {showDelete &&
                <DeleteRecipeStep id={step.id} />
            }
            <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP {step.step_number}</h2>
                {!editMode ?
                    <p
                        className="leading-relaxed whitespace-pre-line cursor-pointer"
                        onDoubleClick={toggleEditMode}
                    >
                        {step.instruction}
                    </p>
                    :
                    <EditRecipeStep
                        step={step}
                        stopEditing={toggleEditMode}
                    />
                }
            </div>
        </div>
    )
}