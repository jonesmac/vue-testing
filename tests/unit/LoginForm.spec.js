import { shallowMount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm.vue', () => {
  it('validates the form on submit and set messages', () => {    
    const wrapper = shallowMount(LoginForm, {});
    const form = wrapper.find('form');
    expect(wrapper.vm.$data.messages).toEqual([]);

    wrapper.setData({ payload: { email: '', password: '' }});
    form.trigger('submit');
    expect(wrapper.vm.$data.messages).toEqual([
      wrapper.vm.$data.errorMessages.emailRequired,
      wrapper.vm.$data.errorMessages.passwordRequired
    ]);

    wrapper.setData({
      payload: {
        email: 'test@gmail.com',
        password: 'test'
      }
    });
    form.trigger('submit');
    expect(wrapper.vm.$data.messages).toEqual([]);
  });

  it('calls the api when submit is called with valid values', () => {
    const wrapper = shallowMount(LoginForm, {});
    const form = wrapper.find('form');
    const fakeAxios = {
      post: () => {}
    }
    const spy = jest.spyOn(fakeAxios, 'post');
    wrapper.setData({ axios: fakeAxios });

    wrapper.setData({
      payload: {
        email: 'test@gmail.com',
        password: 'test'
      }
    });

    form.trigger('submit');
    expect(spy).toHaveBeenCalledWith(
      wrapper.vm.$data.API.USERS.CREATE,
      wrapper.vm.$data.payload
    );
  })
});