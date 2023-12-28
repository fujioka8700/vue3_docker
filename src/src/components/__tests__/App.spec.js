import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TheCount from '../TheCount.vue'
import TheInput from '../TheInput.vue'

describe('App.vue', () => {
  it('ボタンをクリックするとカウントが増える', () => {
    const wrapper = mount(TheCount)

    const btn = wrapper.find(`[data-test="btn"]`)

    // trigger でイベント発火
    btn.trigger('click')

    expect(wrapper.vm.count).toBe(1)
  })

  it('First name に名前を入力する', async () => {
    const wrapper = mount(TheInput)

    await wrapper.find('input[type="text"]').setValue('Tanaka')
    expect(wrapper.vm.firstName).toBe('Tanaka')
  })
})
