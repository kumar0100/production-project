import { StateSchema } from "app/providers/store-provider"
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "./articleDetails"

describe('GetState', () => {
    test('', () => {
        const data = {
            id: '1',
            title: 'title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDtails: {
                data
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })
    test('', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })

    test('', () => {
        const state: DeepPartial<StateSchema> = {
            articleDtails: {
                isLoading: true,
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })
    test('', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })

    test('', () => {
        const state: DeepPartial<StateSchema> = {
            articleDtails: {
                error: 'error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
    })
    test('', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
})