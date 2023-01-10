#include<bits/stdc++.h>

using namespace std;

int count(vector<int> arr)
{
	int n = arr.size();

	int i = 0, j = 0;
	int cnt1 = 0, ones = 0, mn = INT_MAX;

	for(auto it : arr) if(it == 1) cnt1++;

	while(j < n)
	{
		if(arr[j] == 1) ones++;
		if(j - i + 1 < cnt1) ++j;

		else if(j - i + 1 == cnt1)
		{
			mn = min(mn, j - i + 1 - ones);
			if(arr[i] == 1) ones--;
			++i;
			++j;
		}
	}

	return mn;
}


int main()
{
	vector<int> arr = {1, 0, 0, 1, 0, 0, 1, 0, 0, 1};
	cout << count(arr);
}