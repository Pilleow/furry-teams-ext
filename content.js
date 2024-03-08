function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
const randomImageUrls = [
    "https://i.redd.it/jffr8r5bcuz61.jpg",
    "https://pbs.twimg.com/media/FhZOSTcWAAcgKgv.jpg",
    "https://i.pinimg.com/474x/36/a3/b4/36a3b4b1056f9fa0f498c6127d7603ae.jpg",
    "https://i.pinimg.com/736x/d3/9d/46/d39d46210cdacaee2c456b2f2743ded9.jpg",
    "https://i.pinimg.com/236x/03/6f/d5/036fd585b14026643b2948f7a104ddd5.jpg",
    "https://i.redd.it/cjb0hebcq2c81.jpg",
    "https://pbs.twimg.com/media/ElBO_9aWkAEcyfX.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZnXgHwNC_R5dq3ZnoHq7elvPkMMbk-qVyQ&usqp=CAU",
    "https://animemotivation.com/wp-content/uploads/2023/06/cute-anime-pfp-profile-pictures-girls-23.jpg",
    "https://animemotivation.com/wp-content/uploads/2023/06/cute-anime-pfp-profile-pictures-girls-23.jpg",
    "https://64.media.tumblr.com/f5f1dc84be2bcf6d14a4445f6840f34d/65a2d25d7ccac8be-ec/s1280x1920/402b2a7ee3de6f127b58c7c03b821150b57bde2d.jpg",
    "https://upload-os-bbs.hoyolab.com/upload/2023/02/16/278637125/1833fea951aee0923e5012b9fc79ec40_3246628534274356432.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80"
];

shuffle(randomImageUrls)

const images = document.querySelectorAll('img[ng-src]');
let i = 0;
images.forEach((img) => {
    img.src = randomImageUrls[i++ % randomImageUrls.length];
    console.log('Image URL:', img);
});
