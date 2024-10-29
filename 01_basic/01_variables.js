    const accountId = 117654;
    let accountEmail = "akshat@gmail.com";
    var password = "12345";
    accountCity = "Jaipur";
    let accountState

    // accountId = 73627; not allowed (re-assigning of const variables are not allowed)

    accountEmail = "Shubham@gmail.com";
    password = 2738273;
    accountCity = "Mumbai";


    console.table([accountId,accountEmail,password,accountCity,accountState]);

    /*
    Prefer not to use var as it has issue with block scope and functional scope 
    */