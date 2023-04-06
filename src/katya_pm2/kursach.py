import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt


def laba_1(data):

    # Разделение таблицы
    print("Разделение таблицы\n")
    print(data.iloc[:, :26])
    print(data.iloc[:, 26:])
    print("----------------------------------------------------------\n")

    # Фильтрация
    def filter(x):
        return x < 1000000

    print("Фильтрация\n")
    print(data[data['Population'].apply(filter)])
    print("----------------------------------------------------------\n")

    # Объединение значений двух столбцов
    print("Объединение двух столбцов\n")
    print(pd.concat([data.iloc[:, :27],
                     data['Deaths'].astype(str) + data['Unit (all except Population)'],
                     data.iloc[:, 28:31]], axis=1))
    print("----------------------------------------------------------\n")

    # Разделение значение столбца на два столбца
    print("Разделение столбца\n")
    print(pd.concat([data.iloc[:, 1],
                     data["Alcoholic Beverages"].astype(str).str.split(".", expand=True),
                     data.iloc[:, 2:]], axis=1))
    print("----------------------------------------------------------\n")

    # Удаление дубликатов
    print("Удаление дубликатов\n")
    print(data.append(data.iloc[data.shape[0]-1]))
    print(data.drop_duplicates())
    print("----------------------------------------------------------\n")

    # Применение melt
    print("Применение melt\n")
    print(data.melt())
    print("----------------------------------------------------------\n")

    # Сортировка
    print("Сортировка\n")
    print(data.sort_values(by='Population'))
    print("----------------------------------------------------------\n")

    # Замена значения ячейки
    print("Замена значения ячейки\n")
    print(data.replace(0.290524, 0.3))
    print("----------------------------------------------------------\n")

    # Применение функции ко всему столбцу
    def to_mill(x):
        x = x / 1000000
        return x

    print("Применение функции ко всему столбцу\n")
    data['Population'] = data['Population'].apply(to_mill)
    print(data)
    print("----------------------------------------------------------\n")

    # Переименование столбца
    print("Переименование столбца\n")
    print(data.rename(columns={"Unit (all except Population)": 'Unit'}))
    print("----------------------------------------------------------\n")

    # Для объединения несколько таблиц по ключам используется метод merge
    # в параметр how передается тип пересечения:
    # left: use only keys from left frame
    # right: use only keys from right frame
    # outer: use union of keys from both frames
    # inner: use intersection of keys from both frames
    # cross: creates the cartesian product from both frames

    # Уникальные значения столбца
    print("Уникальные значения столбца\n")
    print(data["Obesity"].unique())
    print("----------------------------------------------------------\n")

    # Количество повторений в столбце
    print("Количество повторений в столбце\n")
    print(data.groupby("Obesity").size())
    print("----------------------------------------------------------\n")

    # Сохранение таблицы
    data.to_excel("food.xlsx")


def laba_2(data):
    data = data.rename(columns={"Unit (all except Population)": 'Unit'})
    data_corr_obesity = data.iloc[:, 1:25]
    corr_obesity = data_corr_obesity.corr()[['Obesity']]

    def filter(x):
        return x > 0

    sns.heatmap(corr_obesity[corr_obesity['Obesity'].apply(filter)], annot=True)
    plt.title("Коэффициент корреляции между потреблением\nопределенной пищи и ожирением")

    country = data.loc[:, ['Country']].to_numpy().ravel()
    sugar = data.loc[:, ['Sugar & Sweeteners']].to_numpy().ravel()
    figure = data.loc[:, ['Country', 'Sugar & Sweeteners']].plot.bar()
    plt.title("Процент потребления энергии (ккал)\nсахара и сладкого по странам")
    plt.ylabel('Процент потребления энергии\n(ккал) сахара и сладкого ')
    count = 0
    figure.set_xticklabels(country)
    for n, label in enumerate(figure.get_xticklabels()):
        if sugar[count] < 8:
            label.set_visible(False)
        count += 1
    plt.xticks(rotation=90)

    countries = pd.read_csv("countries.csv")
    countries = countries.loc[:, ['country', 'region']]
    region_uniq = countries['region'].unique()
    for i in data.index:
        for j in countries.index:
            if data['Country'].iloc[i] == countries['country'].iloc[j]:
                data = data.replace(data['Country'].iloc[i], countries['region'].iloc[j])

    def filter_asia(x):
        return x == "Asia"

    def filter_africa(x):
        return x == "Africa"

    def filter_oceania(x):
        return x == "Oceania"

    def filter_europe(x):
        return x == "Europe"

    def filter_north_america(x):
        return x == "North America"

    def filter_south_america(x):
        return x == "South America"

    asia = data[data['Country'].apply(filter_asia)].loc[:, 'Obesity'].mean()
    africa = data[data['Country'].apply(filter_africa)].loc[:, 'Obesity'].mean()
    oceania = data[data['Country'].apply(filter_oceania)].loc[:, 'Obesity'].mean()
    europe = data[data['Country'].apply(filter_europe)].loc[:, 'Obesity'].mean()
    north_america = data[data['Country'].apply(filter_north_america)].loc[:, 'Obesity'].mean()
    south_america = data[data['Country'].apply(filter_south_america)].loc[:, 'Obesity'].mean()

    plt.figure()
    plt.bar(region_uniq, [asia, europe, africa, oceania, north_america, south_america])
    plt.title("Процент ожирения по контитентам")
    plt.show()



if __name__ == "__main__":
    data = pd.read_csv("Food_Supply_kcal_Data.csv")
    pd.set_option('display.max_columns', None)
    #laba_1(data)
    laba_2(data)
