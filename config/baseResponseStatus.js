module.exports = {
    // Success
    SUCCESS: { isSuccess: true, code: 1000, message: "성공" },

    // Common
    TOKEN_EMPTY: {
        isSuccess: false,
        code: 2000,
        message: "JWT 토큰을 입력해주세요.",
    },
    TOKEN_VERIFICATION_FAILURE: {
        isSuccess: false,
        code: 3000,
        message: "JWT 토큰 검증 실패",
    },
    TOKEN_VERIFICATION_SUCCESS: {
        isSuccess: true,
        code: 1001,
        message: "JWT 토큰 검증 성공",
    },

    //Request error
    USER_ID_EMPTY: { isSuccess: false, code: 2001, message: "UID를 입력해주세요." },
    PRODUCT_ID_EMPTY: { isSuccess: false, code: 2002, message: "제품ID를 입력해주세요." },
    CATEGORY_ERROR_TYPE: { isSuccess: false, code: 2003, message: "카테고리가 맞지 않습니다." },

    //Reponse error
    USER_NOT_EXIST: { isSuccess: false, code: 3001, message: "유저가 존재하지 않습니다." },
    PRODUCT_NOT_EXIST: { isSuccess: false, code: 2002, message: "제품이 존재하지 않습니다." },

    //Connection, Transaction 등의 서버 오류
    DB_ERROR: { isSuccess: false, code: 4000, message: "데이터 베이스 에러" },
    SERVER_ERROR: { isSuccess: false, code: 4001, message: "서버 에러" },
};