const thumbNailYemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = (picture) => {
  const thumbnail = thumbNailYemplate.clone(true);

  thumbnail.querySelector('.picture__img').src = picture.url;
  thumbnail.querySelector('.picture__img').alt = picture.description;
  thumbnail.querySelector('.picture__likes').textContent = picture.likes;
  thumbnail.querySelector('.picture__comments').textContent = picture.comments.length;

  return thumbnail;
};
