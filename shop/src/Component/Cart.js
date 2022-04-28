import React from 'react';
import { Nav, Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../Style/Cart.css';

function Cart(props) {
  return (
    <div className='container'>
      <h4 className='title pt-5'>SHOPPING CART</h4>
      <Nav
        className='justify-content-start pt-5 mt-5'
        variant='tabs'
        defaultActiveKey='link-0'
      >
        <Nav.Item>
          <Nav.Link eventKey='link-0' onClick={() => {}}>
            국내배송상품
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Table className='mt-5 w-100' bordered hover>
        <thead className='text-center'>
          <tr>
            <th>번호</th>
            <th>상품 이미지</th>
            <th>상품명</th>
            <th>종류</th>
            <th>수량</th>
            <th>추가/삭제</th>
            <th>삭제</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id + 1}</td>
                <td>{a.name}</td>
                <td>{a.name}</td>
                <td>{a.type}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: 'plus', data: a.id });
                    }}
                  >
                    추가
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: 'minus', data: a.id });
                    }}
                  >
                    감소
                  </button>
                </td>
                <td>
                  {/* <button
                      onClick={() => {
                        props.dispatch({
                          type: 'add',
                          payload: {
                            id: i + 1,
                            name: '새로운 상품',
                            quan: 1,
                          },
                        });
                      }}
                    >
                      항목추가
                    </button> */}
                  <button
                    onClick={() => {
                      props.dispatch({
                        type: 'subtract',
                        data: a.id,
                      });
                    }}
                  >
                    삭제
                  </button>
                  {/* <button
                      onClick={() => {
                        props.dispatch({ type: 'plus', data: a.id });
                      }}
                    >
                      +
                    </button> */}
                  {/* <button
                      onClick={() => {
                        props.dispatch({ type: 'minus', data: a.id });
                      }}
                    >
                      -
                    </button> */}
                </td>
                <td>
                  <input type='checkbox' id='check' name='check'></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className='cart-btn mt-5'>
        <Button onClick={() => {}} variant='primary'>
          선택 상품 주문
        </Button>
        <Button onClick={() => {}} variant='primary'>
          전체 상품 주문
        </Button>
      </div>

      <div className='box row mt-5'>
        <div className='col-1'>이용안내</div>
        <h6>장바구니 이용안내</h6>
        <div>
          <p>
            1.해외배송 상품과 국내배송 상품은 함께 결제하실 수 없으니 장바구니
            별로 따로 결제해 주시기 바랍니다.
          </p>
          <p>
            2.해외배송 가능 상품의 경우 국내배송 장바구니에 담았다가 해외배송
            장바구니로 이동하여 결제하실 수 있습니다.
          </p>
          <p>
            3.선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을
            누르시면 됩니다.
          </p>
          <p>4.[쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.</p>
          <p>
            5.장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나
            관심상품으로 등록하실 수 있습니다.
          </p>
          <p>
            6.파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에 업로드
            한 파일로 교체됩니다.
          </p>
        </div>
        <h6>장바구니 이용안내</h6>
        <p>
          1.상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여
          [주문하기] 버튼을 눌러 주문/결제 하시면 됩니다.
        </p>
        <p>
          2.[전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든
          상품에 대한 주문/결제가 이루어집니다.
        </p>
        <p>
          3.단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을 받으실
          수 없습니다.
        </p>
        <p>
          4.무이자할부 상품은 장바구니에서 별도 무이자할부 상품 영역에 표시되어,
          무이자할부 상품 기준으로 배송비가 표시됩니다. 실제 배송비는 함께
          주문하는 상품에 따라 적용되오니 주문서 하단의 배송비 정보를
          참고해주시기 바랍니다.
        </p>
      </div>
    </div>
  );
}

function StateToProps(state) {
  // console.log(state);
  // console.log(state.reducer);
  return {
    state: state.reducer,
    // state2: state.reducer2,
  };
}

export default connect(StateToProps)(Cart);
