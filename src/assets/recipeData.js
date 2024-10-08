import food_1 from './food_1.png';
import food_2 from './food_2.png';
import food_3 from './food_3.png';
import food_4 from './food_4.png';

export const RECIPE_CONTENTS = [
    {
        title: '콘 치즈 김치볶음밥',
        img: food_1,
        ingredients: '김치, 밥, 옥수수, 마요네즈, 피자치즈, 고추장, 돼지고기(선택), 계란(선택)',
        recipe:
            '1. 김치를 잘게 썰어 볶고, 밥과 고추장을 넣어 함께 볶아 김치볶음밥을 완성.\n' +
            '2. 옥수수에 마요네즈를 섞어 따로 팬에 볶다가 피자치즈를 뿌려 녹임.\n' +
            '3. 김치볶음밥 위에 콘치즈를 얹어 완성.',
    },
    {
        title: '떡볶이',
        img: food_2,
        ingredients: '떡, 고추장, 설탕, 어묵, 양배추',
        recipe:
            '1. 냄비에 물을 넣고 고추장, 설탕을 풀어 소스를 만든다.\n' +
            '2. 떡, 어묵, 양배추를 넣고 끓인다.\n' +
            '3. 재료가 모두 익고 소스가 졸아들면 완성한다.',
    },
    {
        title: '계란찜',
        img: food_3,
        ingredients: '계란, 물, 소금, 참기름, 쪽파',
        recipe:
            '1. 계란을 물과 소금에 잘 섞는다 (계란:물 비율은 1:1).\n' +
            '2. 냄비에 섞은 계란물을 넣고 약한 불에서 뚜껑을 덮고 천천히 끓인다.\n' +
            '3. 계란찜이 부드럽게 익으면 참기름과 쪽파로 마무리한다.',
    },
    {
        title: '제육덮밥',
        img: food_4,
        ingredients: '돼지고기, 고추장, 간장, 마늘, 고춧가루, 양파, 밥',
        recipe:
            '1. 돼지고기를 고추장, 간장, 고춧가루, 마늘, 설탕으로 양념한다.\n' +
            '2. 양념된 돼지고기와 양파를 팬에 넣고 볶는다.\n' +
            '3. 밥 위에 볶은 제육을 올려서 완성한다.',
    },
];