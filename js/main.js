/*
Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post,
numero progressivo da 1 a n nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder 
ad es. Unsplash (https://unsplash.it/300/300?image=<id>

Milestone 2
Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

Milestone 3
Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e
incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

*/

const postList = [
    {
        id: 1,
        profileName: 'Pinco Pallino',
        profilePhoto: 'https://unsplash.it/300/300?image=',
        date: '10-02-2019',
        text: 'The red glint of paint sparkled under the sun. He had dreamed of owning this car since he was ten, and that dream had become a reality less than a year ago. It was his baby and he spent hours caring for it, pampering it, and fondling over it. She knew this all too well, and that\'s exactly why she had taken a sludge hammer to it.',
        likes: 120,
    },
    {
        id: 2,
        profileName: 'Mauro Mirtillo',
        profilePhoto: 'https://unsplash.it/300/300?image=',
        date: '22-06-2019',
        text: 'What have you noticed today? I noticed that if you outline the eyes, nose, and mouth on your face with your finger, you make an "I" which makes perfect sense, but is something I never noticed before. What have you noticed today?',
        photo: 'https://unsplash.it/600/300?image=',
        likes: 30,
    },
    {
        id: 3,
        profileName: 'Lisa Pantalone',
        profilePhoto: 'https://unsplash.it/300/300?image=',
        date: '01-12-2020',
        text: 'There was something in the sky. What exactly was up there wasn\'t immediately clear. But there was definitely something in the sky and it was getting bigger and bigger.',
        photo: 'https://unsplash.it/600/300?image=',
        likes: 50,
    },
    {
        id: 4,
        profileName: 'Laura Felici',
        profilePhoto: 'https://unsplash.it/300/300?image=',
        date: '19-07-2019',
        text: 'The house was located at the top of the hill at the end of a winding road. It wasn\'t obvious that the house was there, but everyone in town knew that it existed. They were just all too afraid to ever go and see it in person.',
        likes: 68,
    },
    {
        id: 5,
        profileName: 'Andrea Novi',
        profilePhoto: 'https://unsplash.it/300/300?image=',
        date: '15-06-2021',
        text: 'She counted. One. She could hear the steps coming closer. Two. Puffs of breath could be seen coming from his mouth. Three. He stopped beside her. Four. She pulled the trigger of the gun.',
        photo: 'https://unsplash.it/600/300?image=',
        likes: 789,
    },
]