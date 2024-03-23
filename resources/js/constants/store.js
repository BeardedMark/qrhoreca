import {reactive, readonly} from "vue";

const state = reactive({
    order: [],
    userId: 1,
    admin: [
        {
            page: {
                name: 'categories',
                pageTitle: '<p>Категории</p>',
                pageSubtitle: '<p>Начиная от аппетитных завтраков и заканчивая изысканными десертами, каждая категория приглашает вас на неповторимое кулинарное путешествие</p><p>Вы можете посмотреть все&nbsp;<a href="menu">Меню</a>&nbsp;целиком</p>',
            },
        },
    ],
    categories: [],
    modal: '',
    newProductCategory: '', //хранилище значений для выбора категории нового продукта
});

const setOrder = (value) => {
    state.order = value;
};

const setNewProductCategory = (value) => {
    state.newProductCategory = value;
};

const logOut = () => {
    state.userId = 0;
};

const setAdminData = (page, pageTitle = '', pageSubtitle = '') => {
    const currPageData = state.admin.find((item) => item.page.name === page);

    if(!Object.keys(currPageData).length) {
        return;
    }

    currPageData.page.pageTitle = currPageData.page.pageTitle ? currPageData.page.pageTitle : '';
    currPageData.page.pageSubtitle = currPageData.page.pageSubtitle ? currPageData.page.pageSubtitle : '';
};

const setNewCategory = (name, imageUrl, description) => {
    if(name) {
        state.categories.push(({
            name: name,
            imageUrl: imageUrl,
            description: description,
        }));
    }
};

const openModal = (modal) => {
    state.modal = modal;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    state.modal = null;
    document.body.style.overflow = 'scroll';
};

export const siteStore = readonly({
    setOrder,
    state,
    logOut,
    setAdminData,
    setNewCategory,
    openModal,
    closeModal,
    setNewProductCategory,
});
