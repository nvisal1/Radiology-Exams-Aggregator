const sampleInput = [ 
    {"rad_exam_id": 1, "modality": "CT", "exam_duration": 10 }, 
    { "rad_exam_id": 2, "modality": "CT", "exam_duration": 13 }, 
    { "rad_exam_id": 3, "modality": "CT", "exam_duration": 12 }, 
    { "rad_exam_id": 4, "modality": "MR", "exam_duration": 90 }, 
    { "rad_exam_id": 5, "modality": "MR", "exam_duration": 100 }, 
    { "rad_exam_id": 6, "modality": "US", "exam_duration": 9 }, 
    { "rad_exam_id": 7, "modality": "US", "exam_duration": 7 } 
];

const sampleOutput = [ 
    { "label": "CT", "value": 35 },
    { "label": "MR", "value": 190 },
    { "label": "US", "value": 16 }
];

/**
 * Calculates the sum of all given exam durations for each provided modality
 * 
 * @param { { rad_exam_id: number, modality: string, exam_duration: number }[] } examDescriptions
 * 
 * @returns { { label: string, value: number }[] } 
 */
function getTotalExamDurations(examDescriptions) {

    // Store each modality as a key in the totalExamDurations
    // object. The value of each modality will be its
    // total exam duration
    const totalExamDurations = {};

    examDescriptions.forEach(entry => {

        // If the modality was already entered as a key,
        // add the current exam duration to the existing exam duration. 
        // Otherwise, enter the new modality and exam duration.
        totalExamDurations[entry.modality] ? 
            totalExamDurations[entry.modality] += entry.exam_duration : totalExamDurations[entry.modality] = entry.exam_duration;
    });

    // At this point, we have the total exam durations
    // for each modality. Iterate over the modality labels
    // and convert the key/value pairs to the expected
    // return type.
    const modalityLabels = Object.keys(totalExamDurations);

    const out = modalityLabels.map(label => ({ label: label, value: totalExamDurations[label] }));

    return out;
}

const totalExamDurations = getTotalExamDurations(sampleInput);

console.log('Expected Result');
console.log(sampleOutput);

console.log('\n');

console.log("Actual Result");
console.log(totalExamDurations);


