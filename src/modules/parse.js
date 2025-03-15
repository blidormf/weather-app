const getRelevantData = function (jsonData) {
    const location = jsonData.resolvedAddress;
    const temperature = jsonData.currentConditions.temp;
    const description = jsonData.currentConditions.conditions;
    const icon = jsonData.currentConditions.icon;

    return {
        location: location,
        temperature: temperature,
        description: description,
        icon: icon,
    };
};

export default getRelevantData;