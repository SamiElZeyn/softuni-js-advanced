function constructionCrew(data) {
    let weight = data.weight;
    let experience = data.experience;
    let levelOfHydrated = data.levelOfHydrated;
    let dizziness = data.dizziness;

    if (!dizziness) {
        return data;
    }
    let obj = {
        'weight': weight,
        "experience": experience,
        "levelOfHydrated": levelOfHydrated,
        "dizziness": dizziness,
    }
    let requiredWater = 0.1 * weight * experience;
    obj['levelOfHydrated'] += requiredWater;
    obj['dizziness'] = false;
    return obj;

}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})