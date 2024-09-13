let storeVolunteerData = [];

const defaultController = (req, res) => {
    console.log("Run Default Controller.");

    res.render('index', { volunteer: storeVolunteerData });
};

const VolRun = (req, res) => {
    console.log("Run Volunteer Appp.");

    const VolId = {
        id: storeVolunteerData.length + 1,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        skills: req.body.skills,
    }

    storeVolunteerData = [...storeVolunteerData, VolId];
    console.log(storeVolunteerData);
    res.redirect('/');
}

const editVolController = (req, res) => {
    console.log("Run Edit Volunteer Appp.");

    let { id } = req.params;
    const singleVol = storeVolunteerData.find((data) => {
        return data.id == id
    });
    console.log("Single Volunteer for EDIT", singleVol);
    res.render('edit', { singleVol });
}

const updateVolController = (req, res) => {
    console.log("Run Update Volunteer Appp.");
    let { id } = req.params;
    const { name, email, phone, skills } = req.body;
    const singleVol = storeVolunteerData.find((data) => {
        return data.id == id
    });
    singleVol.name = name;
    singleVol.email = email;
    singleVol.phone = phone;
    singleVol.skills = skills;
    console.log("Updated Volunteer", singleVol);
    res.redirect('/');
}

const deleteVolController = (req, res)=>{
    console.log("Run Delete Volunteer Appp.");
    let {id} = req.params;
    const deleteVol = storeVolunteerData.filter((data)=>{
        return data.id != id;
    });
    storeVolunteerData = deleteVol;
    console.log("Record DELETE Successfully.");
    res.redirect('/');
}

module.exports = { defaultController, VolRun, editVolController, updateVolController, deleteVolController };
