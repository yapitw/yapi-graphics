function findScrollParent(elem: HTMLElement) {
    let scrollParent = elem.parentElement
    while (
        scrollParent &&
        scrollParent.scrollHeight <= scrollParent.clientHeight
    ) {
        scrollParent = scrollParent.parentElement
    }
    return scrollParent
}
