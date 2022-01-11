// FUNZIONI

function generateHtml(object) {
    containerHtml.innerHTML +=
    ` 
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${object.profilePhoto}" alt="${object.profileName}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${object.profileName}</div>
                    <div class="post-meta__time">${object.date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${object.text}</div>
        <div class="post__image">
            <img src="${object.photo}" alt="photo">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" data-postid="${object.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${object.id}" class="js-likes-counter">${object.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `
}

// ------------------------------------------------------------------------------------------------------------

// array degli oggetti
const postList = [
    {
        id: 1,
        profileName: 'Pinco Pallino',
        profilePhoto: 'https://unsplash.it/300/300?image=1',
        date: '10-02-2019',
        text: 'The red glint of paint sparkled under the sun. He had dreamed of owning this car since he was ten, and that dream had become a reality less than a year ago. It was his baby and he spent hours caring for it, pampering it, and fondling over it. She knew this all too well, and that\'s exactly why she had taken a sludge hammer to it.',
        photo: 'https://unsplash.it/600/300?image=19',
        likes: 120,
    },
    {
        id: 2,
        profileName: 'Mauro Mirtillo',
        profilePhoto: 'https://unsplash.it/300/300?image=11',
        date: '22-06-2019',
        text: 'What have you noticed today? I noticed that if you outline the eyes, nose, and mouth on your face with your finger, you make an "I" which makes perfect sense, but is something I never noticed before. What have you noticed today?',
        photo: 'https://unsplash.it/600/300?image=25',
        likes: 30,
    },
    {
        id: 3,
        profileName: 'Lisa Pantalone',
        profilePhoto: 'https://unsplash.it/300/300?image=12',
        date: '01-12-2020',
        text: 'There was something in the sky. What exactly was up there wasn\'t immediately clear. But there was definitely something in the sky and it was getting bigger and bigger.',
        photo: 'https://unsplash.it/600/300?image=36',
        likes: 50,
    },
    {
        id: 4,
        profileName: 'Laura Felici',
        profilePhoto: 'https://unsplash.it/300/300?image=16',
        date: '19-07-2019',
        text: 'The house was located at the top of the hill at the end of a winding road. It wasn\'t obvious that the house was there, but everyone in town knew that it existed. They were just all too afraid to ever go and see it in person.',
        photo: 'https://unsplash.it/600/300?image=50',
        likes: 68,
    },
    {
        id: 5,
        profileName: 'Andrea Novi',
        profilePhoto: 'https://unsplash.it/300/300?image=13',
        date: '15-06-2021',
        text: 'She counted. One. She could hear the steps coming closer. Two. Puffs of breath could be seen coming from his mouth. Three. He stopped beside her. Four. She pulled the trigger of the gun.',
        photo: 'https://unsplash.it/600/300?image=34',
        likes: 789,
    },
]

const containerHtml = document.getElementById('container');

// funzione per stampare gli oggetti
for (let i = 0; i < postList.length; i++) {
    generateHtml(postList[i]);
}

const likeButtonHtml = document.querySelectorAll('.js-like-button');

for (let j = 0; j < likeButtonHtml.length; j++) {
    
    likeButtonHtml[j].addEventListener('click', function() {

        let counter = document.getElementById(`like-counter-${j + 1}`);
        postList[j].likes++;
        counter.innerHTML = postList[j].likes;
        likeButtonHtml[j].classList.toggle('like-button--liked');

    })
    
}
