function toggleFunction() {
  const toggleNav = document.getElementById("toggleNav");
  toggleNav.classList.toggle("visible");
  toggleNav.classList.toggle("invisible");
}
function removeToggle() {
  const removeNav = document.getElementById("toggleNav");
  removeNav.classList.toggle("visible");
  removeNav.classList.toggle("invisible");
}
function tabFunction1() {
  const tab1 = document.getElementById("tab-1");
  const tab2 = document.getElementById("tab-2");
  const tab3 = document.getElementById("tab-3");
  const tab4 = document.getElementById("tab-4");
  const tab5 = document.getElementById("tab-5");

  tab1.classList.add("block");
  tab1.classList.remove("hidden");
  tab2.classList.add("hidden");
  tab2.classList.remove("block");
  tab3.classList.add("hidden");
  tab3.classList.remove("block");
  tab4.classList.add("hidden");
  tab4.classList.remove("block");
  tab5.classList.add("hidden");
  tab5.classList.remove("block");
}

function tabFunction2() {
  const tab1 = document.getElementById("tab-1");
  const tab2 = document.getElementById("tab-2");
  const tab3 = document.getElementById("tab-3");
  const tab4 = document.getElementById("tab-4");
  const tab5 = document.getElementById("tab-5");

  tab2.classList.add("block");
  tab2.classList.remove("hidden");
  tab1.classList.add("hidden");
  tab1.classList.remove("block");
  tab3.classList.add("hidden");
  tab3.classList.remove("block");
  tab4.classList.add("hidden");
  tab4.classList.remove("block");
  tab5.classList.add("hidden");
  tab5.classList.remove("block");
}

function tabFunction3() {
  const tab1 = document.getElementById("tab-1");
  const tab2 = document.getElementById("tab-2");
  const tab3 = document.getElementById("tab-3");
  const tab4 = document.getElementById("tab-4");
  const tab5 = document.getElementById("tab-5");

  tab3.classList.add("block");
  tab3.classList.remove("hidden");
  tab1.classList.add("hidden");
  tab1.classList.remove("block");
  tab2.classList.add("hidden");
  tab2.classList.remove("block");
  tab4.classList.add("hidden");
  tab4.classList.remove("block");
  tab5.classList.add("hidden");
  tab5.classList.remove("block");
}

function tabFunction4() {
  const tab1 = document.getElementById("tab-1");
  const tab2 = document.getElementById("tab-2");
  const tab3 = document.getElementById("tab-3");
  const tab4 = document.getElementById("tab-4");
  const tab5 = document.getElementById("tab-5");

  tab4.classList.add("block");
  tab4.classList.remove("hidden");
  tab1.classList.add("hidden");
  tab1.classList.remove("block");
  tab2.classList.add("hidden");
  tab2.classList.remove("block");
  tab3.classList.add("hidden");
  tab3.classList.remove("block");
  tab5.classList.add("hidden");
  tab5.classList.remove("block");
}
AOS.init();
