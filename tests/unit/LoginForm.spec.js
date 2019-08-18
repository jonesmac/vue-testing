import { shallowMount } from '@vue/test-utils'
import LoginForm from '@/views/LoginForm.vue'

describe('LoginForm.vue', () => {
  it('updates payload on new events', () => {
    const wrapper = shallowMount(LoginForm, {})
    const fakeEvent = { control: 'email', value: 'test@gmail.com'};
    wrapper.vm.handleInputs(fakeEvent);
    expect(wrapper.vm.payload.email).toEqual(fakeEvent.value);
  });
});