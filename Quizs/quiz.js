var table = document.querySelector("#Table");

/*
    type 1
    {
        "type" : 1,
        "quiz": string,
        "code": string,
        "list": string[]
    };

    type 2
    {
        "type" : 2,
        "quiz": string,
        "list": string[]
    };

    type 3
    {
        "type" : 2,
        "quiz": string
        "code": string,
    };

    type 4
    {
        "type" : 4,
        "quiz": string
    };
*/
const quizData = [
    {
        "type": 1,
        "quiz": "아래 코드의 실행 결과값으로 옳은것은?",
        "code": "List = [[10, 51, 64, 159], [94, 51, 691, 6, 15]]\n\nList = List[0][:2]",
        "list": [
            "[94, 51, 691, 6, 15]",
            "[10, 51]",
            "[6, 15]",
            "[64, 159]"
        ]
    }, {
        "type": 1,
        "quiz": "아래 코드가 실행되었을 때\nvisitSeoul의 마지막 값으로 옳은것은?",
        "code": "visitSeoul = 0\ndef tripToSeoul(n):\n\tglobal visitSeoul\n\tvisitSeoul = n\n\ndef callSeoul():\n\tvisitSeoult = 100\n\n\ncallSeoul(); tripToSeoul(visitSeoul)",
        "list": [
            "100",
            "1",
            "Error",
            "0"
        ]
    }, {
        "type": 3,
        "quiz": "아래 함수 Print에서 text의 자료형은 무엇인가?",
        "code": "def Print(*text, sep=\" \", end=\"\\n\"):\n\treturn f'{sep}'.join(text) + end"
    }, {
        "type": 2,
        "quiz": "함수의 구조로 옳은것을 고르시오.",
        "list": [
            "함수이름(인수값1, 인수값2)",
            "함수이름(지수값1, 지수값2)",
            "함수이름(매개지수1, 매개지수2)",
            "매개변수(지수값1, 지수값2)"
        ]
    }, {
        "type": 1,
        "quiz": "아래 재귀함수의 결과값으로 옳은것을 고르시오.",
        "code": "bus = [False, False, True, False, True]\n\ndef Loop(n):\n\tif bus[n] == True:\n\t\treturn n\n\treturn Loop(n + 1)\nprint(Loop(0))",
        "list": [
            1,
            2,
            3,
            4
        ]
    }, {
        "type": 3,
        "quiz": "아래 코드의 결과값이 [5, 6, 7, 8, 9] 가 되도록 코드를 추가하시오.",
        "code": "List = [6, 7, 8, 9]"
    }, {
        "type": 4,
        "quiz": "리스트 처리함수에서 원소값의 위치를 찾아주는 함수의 이름을 쓰시오."
    }, {
        "type": 2,
        "quiz": "딕셔너리에서 사용되는 처리함수 중\n사전의 원소 키를 리스트로 반환하는 함수를 고르시오.",
        "list": [
            "keys",
            "values",
            "items",
            "get"
        ]
    }, {
        "type": 2,
        "quiz": "다음중 컬렉션 자료형이 아닌것은?",
        "list": [
            "문자열형",
            "리스트",
            "딕셔너리",
            "튜플"
        ]
    }, {
        "type": 2,
        "quiz": "다음중 처리함수 reverse를 지원하는 언어는 무엇인가?",
        "list": [
            "리스트",
            "딕셔너리",
            "정수형",
            "튜플"
        ]
    }, {
        "type": 3,
        "quiz": "1에서 100사이의 난수를 출력하게\n아래 코드를 완성하시오.",
        "code": "from random import *"
    }, {
        "type": 2,
        "quiz": "다음중 math 라이브러리에 포함되어 있지 않은 함수는?",
        "list": [
            "floor",
            "choice",
            "ceil",
            "sqrt"
        ]
    }, {
        "type": 4,
        "quiz": "math 라이브러리에서 pi상수는 어떤 데이터를 반환하는가?"
    }, {
        "type": 2,
        "quiz": "아래 코드들 중 키워드 함수를 고르시오.",
        "list": [
            "def Code(*c):\n\treturn c",
            "def Code():\n\tx = 10\n\treturn x",
            "def Code(x=10):\n\treturn x",
            "def Code():\n\tglobal x\n\treturn x"
        ]
    }, {
        "type": 3,
        "quiz": "아래 코드의 결과값을 적으시오.",
        "code": "Tup = (9, 5, 10, 51)\nprint(Tup[1:])"
    }, {
        "type": 3,
        "quiz": "아래 코드가 올바르게 작동되기 위해 (x)에 들어갈 값을 적으시오.",
        "code": "List = [\"튤립\", \"장미\", \"라벤더\"]\n\nfor i in (x):\n\tprint(i)\n\n출력값은 아래와 같다.\n\n튤립\n장미\n라벤더"
    }, {
        "type": 3,
        "quiz": "아래 코드에서 변수 String의 값이 \'Hello, Python\' 이 되도록 코드를 완성하시오.",
        "code": "String = \" Hello, Python\""
    }, {
        "type": 2,
        "quiz": "다음 코드들 중 수식을 반환하는 방법으로 옳은것을 고르시오.",
        "list": [
            "global 수식",
            "return 수식",
            "pass 수식",
            "continue 수식"
        ]
    }, {
        "type": 1,
        "quiz": "아래 코드를 실행하였을 경우 출력값으로 올바른것을 고르시오.",
        "code": "List = [[4, 60 1, 5, 6]]\nList[0] = 1\nprint(List[0])",
        "list": [
            "4",
            "60",
            "1",
            "5"
        ]
    }, {
        "type": 3,
        "quiz": "아래 코드의 결과값을 적으시오.",
        "code": "sum([5, 7, 10, 60])"
    }
];

quizData.forEach((i, count) => {
    var tr = document.createElement('tr');
    let index = document.createElement('td');
    index.textContent = (count + 1) + "번";
    switch (i.type) {
        case 1:
            var pres = {
                "code": document.createElement('pre'),
                "quiz": document.createElement('pre'),
                "list": [document.createElement('pre'), document.createElement('pre'), document.createElement('pre'), document.createElement('pre')]
            };
            index.textContent += "\n[객]";
            pres.code.className = "Code";
            index.rowSpan = 7;
            tr.appendChild(index);
            table.appendChild(tr);
            var quiz = document.createElement('td');
            quiz.className = "Quiz";
            quiz.rowSpan = 2;
            quiz.textContent = "문제";
            tr.appendChild(quiz);
            for (j in i) {
                switch (j) {
                    case "list":
                        i[j].forEach((k, count) => {
                            var tr = document.createElement('tr');
                            var numbering = document.createElement('td');
                            numbering.textContent = (count + 1) + "번";
                            numbering.rowSpan = 1;
                            tr.appendChild(numbering);
                            var td = document.createElement('td');
                            pres[j][count].textContent = k;
                            td.appendChild(pres[j][count]);
                            tr.appendChild(td);
                            table.appendChild(tr);
                        });
                        break;
                    default:
                        if (j == "type") continue;
                        tr = document.createElement('tr');
                        var td = document.createElement('td');
                        pres[j].textContent = i[j];
                        td.colSpan = 2;
                        td.appendChild(pres[j]);
                        tr.appendChild(td);
                        table.appendChild(tr);
                        break;
                };
            };
            break;
        case 2:
            var pres = {
                "code": document.createElement('pre'),
                "quiz": document.createElement('pre'),
                "list": [document.createElement('pre'), document.createElement('pre'), document.createElement('pre'), document.createElement('pre')]
            };
            index.textContent += "\n[객]";
            pres.code.className = "Code";
            index.rowSpan = 6;
            tr.appendChild(index);
            table.appendChild(tr);
            var quiz = document.createElement('td');
            quiz.className = "Quiz";
            quiz.rowSpan = 2;
            quiz.textContent = "문제";
            tr.appendChild(quiz);
            for (j in i) {
                switch (j) {
                    case "list":
                        i[j].forEach((k, count) => {
                            var tr = document.createElement('tr');
                            var numbering = document.createElement('td');
                            numbering.textContent = (count + 1) + "번";
                            numbering.rowSpan = 1;
                            tr.appendChild(numbering);
                            var td = document.createElement('td');
                            pres[j][count].textContent = k;
                            td.appendChild(pres[j][count]);
                            tr.appendChild(td);
                            table.appendChild(tr);
                        });
                        break;
                    default:
                        if (j == "type") continue;
                        tr = document.createElement('tr');
                        var td = document.createElement('td');
                        pres[j].textContent = i[j];
                        td.colSpan = 2;
                        td.appendChild(pres[j]);
                        tr.appendChild(td);
                        table.appendChild(tr);
                        break;
                };
            };
            break;
        case 3:
            var pres = {
                "code": document.createElement('pre'),
                "quiz": document.createElement('pre')
            };
            index.textContent += "\n[주]";
            pres.code.className = "Code";
            index.rowSpan = 3;
            tr.appendChild(index);
            table.appendChild(tr);
            var quiz = document.createElement('td');
            quiz.className = "Quiz";
            quiz.rowSpan = 2;
            quiz.textContent = "문제";
            tr.appendChild(quiz);
            for (j in i) {
                if (j == "type") continue;
                tr = document.createElement('tr');
                var td = document.createElement('td');
                pres[j].textContent = i[j];
                td.colSpan = 2;
                td.appendChild(pres[j]);
                tr.appendChild(td);
                table.appendChild(tr);
            };
            break;
        case 4:
            var quizPre = document.createElement('pre');
            index.textContent += "\n[주]";
            index.rowSpan = 2;
            tr.appendChild(index);
            table.appendChild(tr);
            var quiz = document.createElement('td');
            quiz.rowSpan = 2;
            quiz.textContent = "문제";
            tr.appendChild(quiz);

            tr = document.createElement('tr');
            var td = document.createElement('td');
            quizPre.textContent = i.quiz;
            td.colSpan = 2;
            td.appendChild(quizPre);
            tr.appendChild(td);
            table.appendChild(tr);
            break;
    };
});