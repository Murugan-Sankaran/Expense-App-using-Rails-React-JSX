class CreateRecords < ActiveRecord::Migration[5.0]
  def change
    create_table :records do |t|
	t.date :date
	t.string :title
	t.integer :amount	     	
	t.timestamps
    end
  end
end
