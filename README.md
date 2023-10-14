# Modal 라이브러리

모달을 구현할 수 있는 라이브러리입니다. TypeScript를 지원합니다.

## 설치 방법

```
npm install @celuveat/react-modal
yarn add @celuveat/react-modal
```

## 사용 방법

### Modal 컴포넌트 불러오기

`import Modal from '@celuveat/react-modal';`

### Modal 사용 방법

```tsx
<Modal
  isModalOpen={/* Modal이 열려 있는지 boolean 값 전달 */}
  closeModal={/* 버튼을 닫기 위한 코드 작성 */}
>
  {/* ReactNode 형태의 자식을 전달 */}
</Modal>
```

## Props

### isModalOpen

- 모달이 열렸는지 닫혔는지 결정하는 상태입니다.
- boolean 값이 들어갑니다.
- 기본값은 false입니다.

### closeModal

- 모달을 닫기 위한 함수가 들어갑니다.
- isModalOpen을 false로 만드는 코드를 내장해야 합니다.

### children

- 모달 내부에 들어갈 컨텐츠입니다.
- React Element(React Node) 형태로 들어갑니다.

### 사용 예시

```tsx
import MyModal from "@celuveat/react-modal";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>모달을 여는 버튼</button>
      <MyModal isModalOpen={isModalOpen} closeModal={closeModal}>
        <div>
          여기안에 컨텐츠를 넣습니다.
          <button onClick={closeModal}>
            이렇게 닫는 버튼을 만들 수 있습니다.
          </button>
        </div>
      </MyModal>
    </div>
  );
}

export default App;
```
