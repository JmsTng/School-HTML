let t = 0;

let toggle = () => {
    t = t ? 0 : 1;

    document.querySelector(".outgoing").style.display = t ? "none" : "initial";
    document.querySelector(".incoming").style.display = t ? "initial" : "none";
}
