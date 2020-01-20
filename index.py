array = [1, 2, 3, 4, 7]

def has_pair_with_sum(arr, sum):
    my_set = set()
    length = len(arr)

    for x in range(length):

        if arr[x] in my_set:
            return True
        else:
            my_set.add(sum - arr[x])
    
    return False

