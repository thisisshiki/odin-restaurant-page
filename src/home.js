// home.js
import './styles.css'; // 导入样式文件
import odinImage from "./images/restaurant-front.jpg"; // 导入各个轮播图图片
import classicBurger from "./images/classic-burger.jpg";
import cheeseBurger from "./images/cheese-burger.jpg";
import baconBurger from "./images/bacon-burger.jpg";

/**
 * 加载主页内容，包括标题、轮播图和描述
 */
export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // 清空现有内容

    // 创建主标题
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to KingsBurger Restaurant';

    // 创建轮播图容器
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';

    // 创建轮播图本体
    const carousel = document.createElement('div');
    carousel.className = 'carousel';

    // 图片数组，包含所有轮播图图片
    const images = [odinImage, classicBurger, cheeseBurger, baconBurger];
    images.forEach((src, index) => {
        // 创建每一个幻灯片
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (index === 0) slide.classList.add('active'); // 默认第一个幻灯片为活动状态

        // 创建图片元素
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Slide ${index + 1}`;
        img.style.cssText = 'width:100%; height:auto; border-radius:8px;'; // 设置图片样式

        // 将图片添加到幻灯片，并将幻灯片添加到轮播图
        slide.appendChild(img);
        carousel.appendChild(slide);
    });

    // 创建前一个箭头按钮
    const prevArrow = document.createElement('div');
    prevArrow.className = 'arrow prev';
    prevArrow.textContent = '❮'; // 使用箭头符号

    // 创建后一个箭头按钮
    const nextArrow = document.createElement('div');
    nextArrow.className = 'arrow next';
    nextArrow.textContent = '❯'; // 使用箭头符号

    // 创建导航点容器
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots';
    images.forEach((_, index) => {
        // 为每个幻灯片创建一个导航点
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active'); // 默认第一个导航点为活动状态
        dotsContainer.appendChild(dot);
    });

    // 将轮播图、箭头和导航点添加到轮播图容器
    carouselContainer.appendChild(carousel);
    carouselContainer.appendChild(prevArrow);
    carouselContainer.appendChild(nextArrow);
    carouselContainer.appendChild(dotsContainer);

    // 创建描述部分
    const description = document.createElement('div');
    description.className = 'description';
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Experience Authentic Burgers';
    
    const p = document.createElement('p');
    p.textContent = 'Welcome to KingsBurger, where traditional flavors meet modern culinary artistry. Our master chefs create unforgettable dining experiences using the freshest ingredients and time-honored recipes.';

    // 将描述内容添加到描述容器
    description.appendChild(h2);
    description.appendChild(p);

    // 将所有元素添加到主内容区域
    content.appendChild(h1);
    content.appendChild(carouselContainer);
    content.appendChild(description);

    // 初始化轮播图功能
    initializeCarousel();
}

/**
 * 初始化轮播图的功能，包括切换幻灯片、导航箭头和自动播放
 */
function initializeCarousel() {
    const carousel = document.querySelector('.carousel'); // 选择轮播图容器
    const slides = document.querySelectorAll('.slide'); // 获取所有幻灯片
    const prevArrow = document.querySelector('.arrow.prev'); // 获取前一个箭头
    const nextArrow = document.querySelector('.arrow.next'); // 获取后一个箭头
    const dots = document.querySelectorAll('.dot'); // 获取所有导航点

    let currentIndex = 0; // 当前幻灯片索引
    const totalSlides = slides.length; // 幻灯片总数

    /**
     * 更新轮播图显示，根据当前索引切换幻灯片和导航点
     */
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // 平移轮播图
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex); // 更新导航点状态
        });
    }

    /**
     * 显示下一个幻灯片
     */
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // 循环索引
        updateCarousel(); // 更新显示
    }

    /**
     * 显示上一个幻灯片
     */
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // 循环索引
        updateCarousel(); // 更新显示
    }

    /**
     * 跳转到指定索引的幻灯片
     * @param {number} index - 目标幻灯片的索引
     */
    function goToSlide(index) {
        currentIndex = index; // 设置当前索引
        updateCarousel(); // 更新显示
    }

    // 添加箭头按钮的点击事件监听
    nextArrow.addEventListener('click', showNextSlide);
    prevArrow.addEventListener('click', showPrevSlide);

    // 添加导航点的点击事件监听
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // 设置自动播放，每5秒切换一次幻灯片
    setInterval(showNextSlide, 5000);
}
