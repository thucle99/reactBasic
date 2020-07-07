import { all } from  'redux-saga/effects'
import {ItemSaga} from './ItemSaga'
import {AddSaga} from './AddSaga'
import { DeleteSaga } from './DeleteSaga';
import { UpdateSaga } from './UpdateSaga';
import { SearchSaga } from './SearchSaga';
function* rootSaga(){
    yield all([
        ...ItemSaga,
        ...AddSaga,
        ...DeleteSaga,
        ...UpdateSaga,
        ... SearchSaga
    ]);
}
export default rootSaga;