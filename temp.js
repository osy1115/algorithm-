// 거품정렬
function bubbleSort(arr){
    for(let i = 0; i < arr.length - 1; ++i){
        for(let k = 0; k < arr.length -1 -i; ++k){
            if(open(arr[k], arr[k+1])){
                [arr[k], arr[k+1]] = [arr[k+1],arr[k]]
            }
        }
    }
    console.log(arr)
}

//오름차순 정렬
bubbleSort(arr, (lhs, rhs)=> lhs > rhs);

//내림차순 정렬
bubbleSort(arr, (lhs, rhs)=> lhs < rhs);

const elem = {
    "name" : "최선문",
    "grade": 100
}

bubbleSort(arr, (lhs,rhs) => lhs.grade < rhs.grade);

// 선택정렬

function selectionSort(){
for(let i = 0; i < arr.length -1, ++i; ){
    let minindex = i; //최소값 변수설정
    let minValue = arr[i];
    for( let k = 0; k < arr.length; ++k){ //최소값찾기
        if([minValue] > arr[k]){
            minValue = arr[k];
            minindex = k;
        }
    }
    [arr[i], arr[minindex]] = [arr[minindex], arr[i]];
}
    console.log(arr);
}

selectionSort(arr, (lhs,rhs) => lhs < rhs)
selectionSort(arr, (lhs,rhs) => lhs > rhs)


function main(){
    let N = prompt("n");
    let scores = prompt("scores").split("").map(x => Number(x));

    for(let i = 0; i < arr.length -1-i; ++i){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; ++j){
            if (arr[minIndex] < arr[j]){
                minIndex = j;
            }
        }
        
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        // let temp = arr[minIndex];
        // arr[minIndex] = arr[i];
        // arr[i] = temp;
        }

        let grade = 1;
        let currentScore = arr[0];
        for(let i = 1; i <arr.length; ++i){
            if(currentScore != arr[i]){
                ++grade;
                currentScore = arr[i];
            }

            if (grade == 3 ){
                break;
            }
        }
        console.log(arr)
        console.log(currentScore);
    }

    main();

// 삽입정렬

function InsertionSort(arr){
    for(i = 1; i < arr.length; ++i){
        // 숫자 빼는 과정
        let sorthingElem = arr[i];
        // 삽입할 위치 찾는 과정
        let insertedIndex = i - 1;

        while(
            //범위 체크
            insertedIndex >= 0 && 
            //비교하는 구문
            arr[insertedIndex] > sorthingElem){
            // 숫자 위치를 옮겨준다.
            arr[insertedIndex + 1] = arr[insertedIndex];
            //삽입할 위치 업데이트
            --insertedIndex;
        }
        //숫자 삽입
        arr[insertedIndex + 1] = sorthingElem;
    }

    console.log(arr)
}


function main(){
    let [S,N] = prompt("S","N").split(" ").map(x => Number(x));
    let cache = new Array(S).fill(0);

    for(let i = 0; i < N; ++i){
        let task = Number(prompt("task"))
        //Task 위치를 파악해야함. 끝에서부터 시작.
        let taskIndex = S - 1;
        //Cache Hit 유무파악
        for (let j = 0; j < S; ++j)/*캐시 크기*/{
            //Cache Hit인가?
            if(cache[j] == task){
                // taskIndex를 업데이트
                taskIndex = j;
                
                break;
            }
        }
        //삽입할 위치를 제외한 나머지 부분 복사
        for(let j = taskIndex; j > 0; --j){
            cache[j] = cache[j - 1];
        }
        // 삽입할 위치는 첫번째자리
        cache[0] = task;
        console.log(cache);
    }
    //출력부
    console.log(cache)
}
main();