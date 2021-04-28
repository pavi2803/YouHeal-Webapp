messagesRef.once('value').then((snapshot) => {
    Object.keys(snapshot.val()).forEach((key) => {
        console.log(`Name: ${snapshot.val()[key].name}`);
        console.log(`Email: ${snapshot.val()[key].email}`);
        console.log(`Subject: ${snapshot.val()[key].subject}`);
        console.log(`Message: ${snapshot.val()[key].message}`);
    });
});