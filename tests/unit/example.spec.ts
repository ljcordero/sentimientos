import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Content from '@/components/Content/Content.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Content, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
