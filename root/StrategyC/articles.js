const articles = [,
    { title: "2025_01_15", file: "2025_01_15.html", summary: "2025_01_15股票数据"},
    { title: "2025_01_14", file: "2025_01_14.html", summary: "2025_01_14股票数据"},
    { title: "2025_01_13", file: "2025_01_13.html", summary: "2025_01_13股票数据"},
    { title: "2025_01_10", file: "2025_01_10.html", summary: "2025_01_10股票数据"},
    { title: "2025_01_09", file: "2025_01_09.html", summary: "2025_01_09股票数据"},
    { title: "2025_01_08", file: "2025_01_08.html", summary: "2025_01_08股票数据"},
    { title: "2025_01_07", file: "2025_01_07.html", summary: "2025_01_07股票数据"},
    { title: "2025_01_06", file: "2025_01_06.html", summary: "2025_01_06股票数据"},
    { title: "2025_01_03", file: "2025_01_03.html", summary: "2025_01_03股票数据"},
    { title: "2025_01_02", file: "2025_01_02.html", summary: "2025_01_02股票数据"},
    { title: "2024_12_31", file: "2024_12_31.html", summary: "2024_12_31股票数据"},
    { title: "2024_12_30", file: "2024_12_30.html", summary: "2024_12_30股票数据"},
    { title: "2024_12_27", file: "2024_12_27.html", summary: "2024_12_27股票数据"},
    { title: "2024_12_26", file: "2024_12_26.html", summary: "2024_12_26股票数据"},
    { title: "2024_12_25", file: "2024_12_25.html", summary: "2024_12_25股票数据"},
    { title: "2024_12_24", file: "2024_12_24.html", summary: "2024_12_24股票数据"},
    { title: "2024_12_23", file: "2024_12_23.html", summary: "2024_12_23股票数据"},
    { title: "2024_12_20", file: "2024_12_20.html", summary: "2024_12_20股票数据"},
    { title: "2024_12_19", file: "2024_12_19.html", summary: "2024_12_19股票数据"},
    { title: "2024_12_18", file: "2024_12_18.html", summary: "2024_12_18股票数据"},
    { title: "2024_12_17", file: "2024_12_17.html", summary: "2024_12_17股票数据"},
    { title: "2024_12_16", file: "2024_12_16.html", summary: "2024_12_16股票数据"},
    { title: "2024_12_13", file: "2024_12_13.html", summary: "2024_12_13股票数据"},
    { title: "2024_12_12", file: "2024_12_12.html", summary: "2024_12_12股票数据"},
    { title: "2024_12_11", file: "2024_12_11.html", summary: "2024_12_11股票数据"},
    { title: "2024_12_10", file: "2024_12_10.html", summary: "2024_12_10股票数据"},
    { title: "2024_12_09", file: "2024_12_09.html", summary: "2024_12_09股票数据"},
    { title: "2024_12_06", file: "2024_12_06.html", summary: "2024_12_06股票数据"},
    { title: "2024_12_05", file: "2024_12_05.html", summary: "2024_12_05股票数据"},
    { title: "2024_12_04", file: "2024_12_04.html", summary: "2024_12_04股票数据"},
    { title: "2024_12_03", file: "2024_12_03.html", summary: "2024_12_03股票数据"},
    { title: "2024_12_02", file: "2024_12_02.html", summary: "2024_12_02股票数据"},
    { title: "2024_11_29", file: "2024_11_29.html", summary: "2024_11_29股票数据"},
    { title: "2024_11_28", file: "2024_11_28.html", summary: "2024_11_28股票数据"},
    { title: "2024_11_27", file: "2024_11_27.html", summary: "2024_11_27股票数据"},
    { title: "2024_11_26", file: "2024_11_26.html", summary: "2024_11_26股票数据"},
    { title: "2024_11_25", file: "2024_11_25.html", summary: "2024_11_25股票数据"},
    { title: "2024_11_22", file: "2024_11_22.html", summary: "2024_11_22股票数据"},
    { title: "2024_11_21", file: "2024_11_21.html", summary: "2024_11_21股票数据"},
    { title: "2024_11_20", file: "2024_11_20.html", summary: "2024_11_20股票数据"},
    { title: "2024_11_19", file: "2024_11_19.html", summary: "2024_11_19股票数据"},
    { title: "2024_11_18", file: "2024_11_18.html", summary: "2024_11_18股票数据"},
    { title: "2024_11_15", file: "2024_11_15.html", summary: "2024_11_15股票数据"},
    { title: "2024_11_14", file: "2024_11_14.html", summary: "2024_11_14股票数据"},
    { title: "2024_11_13", file: "2024_11_13.html", summary: "2024_11_13股票数据"},
    { title: "2024_11_12", file: "2024_11_12.html", summary: "2024_11_12股票数据"},
    { title: "2024_11_11", file: "2024_11_11.html", summary: "2024_11_11股票数据"},
    { title: "2024_11_08", file: "2024_11_08.html", summary: "2024_11_08股票数据"},
    { title: "2024_11_07", file: "2024_11_07.html", summary: "2024_11_07股票数据"},
    { title: "2024_11_06", file: "2024_11_06.html", summary: "2024_11_06股票数据"},
    { title: "2024_11_05", file: "2024_11_05.html", summary: "2024_11_05股票数据"},
    { title: "2024_11_04", file: "2024_11_04.html", summary: "2024_11_04股票数据"},
    { title: "2024_11_01", file: "2024_11_01.html", summary: "2024_11_01股票数据"},
    { title: "2024_10_31", file: "2024_10_31.html", summary: "2024_10_31股票数据"},
    { title: "2024_10_30", file: "2024_10_30.html", summary: "2024_10_30股票数据"},
    { title: "2024_10_29", file: "2024_10_29.html", summary: "2024_10_29股票数据"},
    { title: "2024_10_28", file: "2024_10_28.html", summary: "2024_10_28股票数据"},
    { title: "2024_10_25", file: "2024_10_25.html", summary: "2024_10_25股票数据"},
    { title: "2024_10_24", file: "2024_10_24.html", summary: "2024_10_24股票数据"},
    { title: "2024_10_23", file: "2024_10_23.html", summary: "2024_10_23股票数据"},
];
