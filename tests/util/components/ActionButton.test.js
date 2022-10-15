import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton.vue";

describe("hhhh", () => {
  it("button name should be log in", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "log in ",
        type: "Primary",
      },
    });
    expect(wrapper.text()).toMatch("log in");
  });
  it("should have the Primary style when type equal to Primary", () => {
    const wrapper = mount(ActionButton, {
      props: {
        type: "Primary",
        text: "log in",
      },
    });
    const Mybutton = wrapper.find("button");
    expect(Mybutton.classes("Primary")).toBe(true);
  });
});
