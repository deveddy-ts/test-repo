def calculate_total(prices):
    total = 0
    for price in prices:
        total += price
    return total

# todo: Refactor this function to handle discounts and taxes
def process_order(order):
    items = order.get("items", [])
    total = calculate_total([item["price"] for item in items])
    # FIXME: handle potential missing 'price' key in some items
    print(f"Order total: {total}")
    return total


if __name__ == "__main__":
    sample_order = {
        "items": [
            {"name": "Book", "price": 15.0},
            {"name": "Pen", "price": 2.5}
        ]
    }
    process_order(sample_order)