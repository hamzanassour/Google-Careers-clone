import { mount } from "@vue/test-utils";

import NavBar from "@/components/NavBar.vue";

// describe("NavBar", () => {
//   it("displays logo ",  () => {
//     const wrapper = mount(NavBar, {
//       data() {
//         return {
//           logo: "Google Careers",
//         };
//       },
//     });
//     expect(wrapper.text()).toMatch("Google Careers");
//   });
// });
// describe("NavBar", () => {
//   it("displays logo ", async () => {
//     const wrapper = mount(NavBar);
//     await wrapper.setData({
//       logo: "Hamza Careers",
//     });
//     expect(wrapper.text()).toMatch("Hamza Careers");
//   });
// });
// the best practive is to use the components as it is like a real user in our test we should only mount it and do our tests

describe("NavBar", () => {
  it("displays logo ", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.text()).toMatch("Google Careers");
  });
  it("should display navigation items ", () => {
    const wrapper = mount(NavBar);
    // // testing by number
    // const numberOfNavigationItems = wrapper.findAll("li").length;
    // expect(numberOfNavigationItems).toBe(5);

    // const NavigationItems = wrapper.findAll("li");
    const NavigationItems = wrapper.findAll(
      "[data-test = 'main-nav-test-item']"
    );
    const NavigationItemsTexts = NavigationItems.map((item) => {
      return item.text();
    });
    expect(NavigationItemsTexts).toEqual([
      "Teams",
      "Locations",
      "Benefits",
      "Jobs",
      "Students",
    ]);
  });
});
// always test the behavior not implementation
