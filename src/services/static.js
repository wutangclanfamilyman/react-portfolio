const ifVisibleAll = (selectors, animation) => {
    selectors.forEach((item) => {
        let bounding = item.getBoundingClientRect();
        if (
            bounding.top >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            if(!item.classList.contains(animation)) {              
                item.classList.add(animation)
            }
        }
    })
}

export {ifVisibleAll};