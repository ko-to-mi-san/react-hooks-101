import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <h4 className="mt-3">イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">ボディ</label>
            <textarea className="form-control" id="formEventBody" />
          </div>
          <button className="mr-3 btn btn-primary">イベントを作成する</button>
          <button className='btn btn-danger'>全てのイベントを削除する</button>
        </form>
        <h4 className='mt-5'>イベント一覧</h4>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
