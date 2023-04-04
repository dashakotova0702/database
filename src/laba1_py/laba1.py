import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# read csv
olympiad = pd.read_csv('results.csv', sep=',', error_bad_lines=False)
pd.set_option('display.max_columns', None)
print(olympiad)

# separate table to 2 tables
olymp_4_7 = olympiad.iloc[:, 4:7]
print(olymp_4_7)


# filter on gold medals
def filter(x):
    return x == 'G'


olymp_4_7_gold = olymp_4_7[olymp_4_7["Medal"].apply(filter)]
print(olymp_4_7_gold)

# merge columns
merge_name_nat = olympiad['Name'] + ' - ' + olympiad['Nationality']
merge_name_nat = pd.DataFrame({"Name and nationality": merge_name_nat})
olympiad_merge = pd.concat([olympiad.iloc[:, :5], merge_name_nat, olympiad.iloc[:, 7]], axis=1)
print(olympiad_merge)

# separate column and rename
separate_name_nat = merge_name_nat["Name and nationality"].str.split(" - ", expand=True)
separate_name_nat = separate_name_nat.rename(columns={0: 'Name', 1: 'Nationality'})
olympiad_separate = pd.concat([olympiad.iloc[:, :5], separate_name_nat, olympiad.iloc[:, 7]], axis=1)
print(olympiad_separate)

# add dublicate
olympiad_dubl = pd.DataFrame(olympiad)
olympiad_dubl.loc[len(olympiad.index)] = olympiad_dubl.iloc[olympiad.shape[0] - 1]
print(olympiad_dubl)

# drop dublicates
olympiad_drop = olympiad_dubl.drop_duplicates()
print(olympiad_drop)


# melt and pivot
olympiad_melt = olympiad.melt()
olympiad_pivot = olympiad_melt.pivot(columns='variable', values='value')
col = olympiad_pivot.columns
for value in col.values:
    olympiad_ = 1
print(olympiad_melt)

# sort
olympiad_sort = olympiad.sort_values(by=['Medal'])
print(olympiad_sort)

# change value on cell
olympiad_change_cell = pd.DataFrame(olympiad)
olympiad_change_cell.loc[2380, "Medal"] = "G"
print(olympiad_change_cell)


# change values on column
def change_medal_to_num(x):
    if x == "G":
        return 1
    if x == "S":
        return 2
    if x == "B":
        return 3


olympiad_change_cell['Medal'] = olympiad_change_cell['Medal'].apply(change_medal_to_num)
print(olympiad_change_cell)

# save table
olympiad_change_cell.to_excel("medal.xlsx")
