const getBookedDoctor = () => {
    const bookedDoctorSTR = localStorage.getItem("bookList")
    if (bookedDoctorSTR) {
        const bookedDoctorData = JSON.parse(bookedDoctorSTR);
        return bookedDoctorData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const bookedDoctorData = getBookedDoctor();
    if (bookedDoctorData.includes(id)) {
        console.log("Hellow")
        alert("You have already booked thids Doctor!")
    }
    else {
        bookedDoctorData.push(id);
        const data = JSON.stringify(bookedDoctorData);
        localStorage.setItem("bookList",data)
      }
}

export { addToStoredDB, getBookedDoctor };