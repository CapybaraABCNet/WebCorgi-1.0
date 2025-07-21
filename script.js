const im = [
            "https://i.pinimg.com/originals/23/2e/a4/232ea467ae9fad1742ba55e65d29949e.jpg",
            "https://i.pinimg.com/originals/4f/85/6d/4f856d630d970fad2e972f9b5e936f30.jpg",
            "https://prohvost.club/wp-content/uploads/2019/06/post_5cfcac1a65f00.jpg",
            "https://avatars.mds.yandex.net/i?id=a9f2bbc14c19a01aa1959a271797fd6e_l-12384509-images-thumbs&n=13",
            "https://travelask.ru/system/images/files/001/418/299/wysiwyg/funny-expressive-dog-corgi-genthecorgi-1-2-5f0ea71c09900__700.jpg?1594929380",
            "http://udivitelno.com/images/10/poroda-sobak-velsh-korgi/24-%D0%A9%D0%B5%D0%BD%D0%BE%D0%BA%20%D0%B2%D0%B5%D0%BB%D1%8C%D1%88-%D0%BA%D0%BE%D1%80%D0%B3%D0%B8,%20%D0%B4%D0%B0%D1%8E%D1%89%D0%B8%D0%B9%20%D0%BB%D0%B0%D0%BF%D1%83.jpg"
        ];

        function getRandom() {
            const randomIm = Math.floor(Math.random() * im.length);
            return im[randomIm]; 
        }

        // Устанавливаем начальное изображение
        document.getElementById('randomImage').src = getRandom();

        // Добавляем обработчик события для кнопки
        document.getElementById('newImageButton').addEventListener('click', function() {
            document.getElementById('randomImage').src = getRandom();
        });
