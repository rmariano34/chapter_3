// // if statements

// const age= 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }
  
// const ninjas = ['shuan', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length >4){
//     console.log("thats a lot of ninjas");
// }

// if statments
// else statements
// const password = 'p@ss12';

// if (password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('that password is strong enough!');
// } else {
//     console.log('password is not strong enough');
// }

// logical NOT (!)

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue');
// }

// console.log(true);
// console.log(false);

// console.log(!true);
// console.log(!false);

// Break and continue

const scores = [50, 25, 0 , 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0{
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i]=== 100){
        console.log('congrats, you got the top score!');
        break;
    }
}